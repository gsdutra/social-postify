// custom-request.interface.ts
import { Request } from 'express';

interface CustomRequest extends Request {
  user: any; // Replace 'any' with the type of the user object if known
}

export default CustomRequest;
