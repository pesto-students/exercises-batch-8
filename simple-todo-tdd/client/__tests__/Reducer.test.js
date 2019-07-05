describe('todos reducer', () => {
  it('should add new todo in updated state for ADD_TODO action', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'New Todo',
      }),
    ).toEqual([
      {
        text: 'New Todo',
        id: 0,
      },
    ]);
  });

  it('should delete todo in updated state for REMOVE_TODO action', () => {
    expect(
      reducer(
        [
          {
            text: 'New Todo',
            id: 0,
          },
        ],
        {
          type: types.REMOVE_TODO,
        },
      ),
    ).toEqual([]);
  });

  it('should update todo in updated state for UPDATE_TODO action', () => {
    expect(
      reducer(
        [
          {
            text: 'New Todo',
            id: 0,
          },
        ],
        {
          type: types.UPDATE_TODO,
          text: 'New Updated Todo',
        },
      ),
    ).toEqual([
      {
        text: 'New Updated Todo',
        id: 0,
      },
    ]);
  });
});
