import * as React from 'react';
import { FieldProps as RFFFieldProps } from 'react-final-form';
interface SUIFieldProps {
    label?: string;
}
interface FieldProps extends RFFFieldProps, SUIFieldProps {
}
/**
 * Wire up react-final-form with SUIField.
 */
export declare const Checkbox: React.SFC<FieldProps>;
export {};
