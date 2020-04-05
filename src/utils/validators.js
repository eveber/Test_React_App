export const required =(value) => {
    if (!value) return 'Обязательное поле!';
    return undefined;
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Длина ввода более ${maxLength} символов!`;
    return undefined;
}