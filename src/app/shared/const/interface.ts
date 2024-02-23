export interface Iproduct{
    pname: string;
    pdetails: string;
    pstatus: productStatus;
    id: string;
}
export enum productStatus {
    InProgress = 'In-Progress',
    Dispatch = 'Dispatched',
    Deliver = 'Delivered'
}