changeTheme('1')

q('input[type="range"]').addEventListener('change', callTheme)

qAll('button').forEach(button => button.addEventListener('click', getKey))