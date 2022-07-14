interface MyUser {
    name: string;
    id: number;
    email?: string;
}
type MyUserOptionals = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionals ): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({
    name: "jack",
    id: 1,
    email: "dont@dont.com"
}, {email: "knuckles90425@aol.com"}))

type RequiredMyUser = Required<MyUser>

type JustEmailName = Pick<MyUser, "email" | "name">;

type UserWithoutID = Omit<MyUser, "id">

const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutID> =>  {
    return users.reduce((a, v)=> {
        const { id, ...other } = v
        return {
            ...a, 
            [id]: other,
        }
    }, {})
}

console.log(mapById([
    {
        id: 2,
        name: "mr. foo"
    },
    {
        id: 3,
        name: "mrs. baz"
    },
]))