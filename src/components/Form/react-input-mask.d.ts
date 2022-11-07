import { Props as InputProps } from 'react-input-mask';

declare module 'react-input-mask' {
  export class Props extends InputProps {
    maskChar?: string;
  }
}
