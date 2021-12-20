import { currency } from "./currency";
import { Status } from "./status";

export interface apiResponse{
  status: Status,
  data:  currency[]
}
