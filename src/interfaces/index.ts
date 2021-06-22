export interface ListMember {
    id?: number;
    firstName: string;
    lastName: string;
    email?: string | null;
    isPrivileged: boolean,
    isNonResident: boolean,
}

export interface List {
    name: string;
    members: ListMember[];
}