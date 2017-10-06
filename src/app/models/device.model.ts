export interface DeviceObj {
    refUid: string;
    refName: string;
    refObjectType: string;
    refVsomUid: string;
}

// export interface Device : DeviceObj [];
export interface Device extends Array<DeviceObj>{};