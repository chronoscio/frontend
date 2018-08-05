import dynamic from 'next/dynamic';

// Lazy-load the map on the client-side
// @TODO Figure how to dynamic import with TypeScript
// @ts-ignore
// @see https://github.com/zeit/next.js/issues/4515
const Callback = dynamic(import('../components/Callback'), { ssr: false });

export default Callback;
