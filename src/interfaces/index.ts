export interface ListMember {
    firstName: string;
    lastName: string;
    email: string;
}

export interface List {
    name: string;
    members: ListMember[];
}