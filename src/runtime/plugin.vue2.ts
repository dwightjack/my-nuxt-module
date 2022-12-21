import { MyClass} from './my-class'

export default (context: any, inject: any) => {
  console.log((new MyClass()).getMessage())
};

