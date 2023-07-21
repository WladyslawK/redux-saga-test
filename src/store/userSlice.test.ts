import { UserState, addUserAC, deleteUserAC, loadUsersAC, userSlice } from "./usersSlice"


describe('userSlice', () => {
    let state: UserState = { users: [] }

    beforeEach(() => {
        state = { users: [{ id: 1, name: "user1" }] }
    })

    it('should load users', () => {
        const newUsers = [{ id: 2, name: "user2" }, { id: 3, name: "user3" }, { id: 4, name: "user4" }]
        const newState = userSlice(state, loadUsersAC(newUsers))

        expect(newState.users.length).toBe(4)
    })
    it('should add user', () => {
        const newState = userSlice(state, addUserAC({ id: 2, name: "user2" }))

        expect(newState.users.length).toBe(2)
        expect(newState.users[1].name).toBe('user2')
    })
    it('should delete user', () => {
        const newState = userSlice(state, deleteUserAC(1))

        expect(newState.users.length).toBe(0)
    })
})