import axios from 'axios';
import { ButtonProps } from 'semantic-ui-react';
import { compose, withHandlers } from 'recompose';

import withAuth from '../../../Login/decorators/withAuth';

export default compose(
  withAuth,
  withHandlers({
    updateGithub: ({ auth, geoJson, onClick }) => async (
      _: any,
      __: ButtonProps
    ) => {
      try {
        console.log('Fetching github oauth token');
        const { data: githubIdentity } = await axios.get(
          `https://wt-37cf1f65543181db5247750abf73fd32-0.sandbox.auth0-extend.com/auth0-github?userId=${
            auth.idTokenPayload.sub
          }`,
          {
            headers: {
              Authorization: `Bearer ${auth.idToken}`
            }
          }
        );
        console.log('Fetched', githubIdentity);

        console.log('Getting latest commit');
        const { data: latestCommit } = await axios.get(
          'https://api.github.com/repos/amaurymartiny/interactivemap/commits/master',
          {
            headers: {
              Authorization: `token ${githubIdentity.access_token}`
            }
          }
        );
        console.log('Latest commit is', latestCommit);

        console.log('Getting tree of latest commit');
        const { data: latestTree } = await axios.get(
          `https://api.github.com/repos/amaurymartiny/interactivemap/git/trees/${
            latestCommit.commit.tree.sha
          }`,
          {
            headers: {
              Authorization: `token ${githubIdentity.access_token}`
            }
          }
        );
        console.log('Tree of latest commit is:', latestTree);

        console.log('Posting new tree', geoJson);
        const { data: newTree } = await axios.post(
          'https://api.github.com/repos/amaurymartiny/interactivemap/git/trees',
          {
            base_tree: latestTree.sha,
            tree: latestTree.tree
              .filter(({ path }: { path: string }) => path !== 'territory.json')
              .concat({
                content: JSON.stringify(geoJson, null, 2),
                mode: '100644',
                path: 'territory.json',
                type: 'blob'
              })
          },
          {
            headers: {
              Authorization: `token ${githubIdentity.access_token}`
            }
          }
        );
        console.log('Posted new tree', newTree);

        console.log('Posting new commit');
        const { data: newCommit } = await axios.post(
          'https://api.github.com/repos/amaurymartiny/interactivemap/git/commits',
          {
            message: 'Update from the web app',
            parents: [latestCommit.sha],
            tree: newTree.sha
          },
          {
            headers: {
              Authorization: `token ${githubIdentity.access_token}`
            }
          }
        );
        console.log('New commit:', newCommit);

        console.log('Updating master reference to new commit');
        const { data: newRef } = await axios.post(
          'https://api.github.com/repos/amaurymartiny/interactivemap/git/refs/heads/master',
          {
            sha: newCommit.sha
          },
          {
            headers: {
              Authorization: `token ${githubIdentity.access_token}`
            }
          }
        );
        console.log('New reference:', newRef);

        onClick();
      } catch (e) {
        console.error(e);
        onClick();
      }
    }
  })
);
