export interface Iproduct{
    pname: string;
    pdetails: string;
    pStatus: productStatus;
    id: string;
}
export enum productStatus {
    InProgress = "In-Progress",
    Dispatch = "Dispatched",
    Deliver = "Delivered"
}