import { actions, follow, unfollow } from './users-reducer'
import { usersAPI } from '../api/users-api'
import { APIResponseType, ResultCodeEnum } from '../api/api'


jest.mock('../api/users-api.ts')
const result: APIResponseType = {
  resultCode: ResultCodeEnum.Success,
  messages: [],
  data: {}
}
//@ts-ignore
userAPIMock.follow.mockReturnValue(Promise.resolve(result));
test('success follow thunk', async () => {
  const thunk = follow(1)
  const dispatchMock = jest.fn()
  //@ts-ignore
  await thunk(dispatchMock)

  expect(dispatchMock).toBeCalledTimes(3)
})