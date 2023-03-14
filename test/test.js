import orderByProps from '../src/js/app';

test('test for function orderByProps', () => {
  const player = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  const result = orderByProps(player, ['name', 'level']);

  expect(result).toEqual(expected);
});
