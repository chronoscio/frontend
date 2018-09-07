import * as React from 'react';
import { FieldProps as RFFFieldProps } from 'react-final-form';
interface SUIFieldProps {
    as?: string | React.ComponentType;
    label?: string | JSX.Element;
}
interface FieldProps extends RFFFieldProps, SUIFieldProps {
}
/**
 * Wire up react-final-form with SUIField.
 */
export declare const Field: React.SFC<FieldProps>;
export {};
