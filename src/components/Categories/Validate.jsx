export default function (values) {
    const errors = {}
    const requiredField = [
        'title',
        'title_en'
    ]

    requiredField.forEach(field => {
        if (!values[field]) errors[field] = 'Заполните это поле'
    })

    return errors
}

