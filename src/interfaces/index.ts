export interface ListMember {
    firstName: string;
    lastName: string;
    email?: string | null;
}

export interface List {
    name: string;
    members: ListMember[];
}