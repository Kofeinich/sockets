import {createSlice} from "@reduxjs/toolkit"


const blocksSlice = createSlice({
    name: 'Data',
    initialState: {
        block1: {
            blockName: 'Block 1',
            enabled: false,
            fields: {
                fname: {
                    fieldName: 'Имя',
                    fieldPlaceHolder: 'Введите имя',
                    fieldReadonly: false,
                    fieldType: 'text',
                    fieldValue: '',
                },
                lname: {
                    fieldName: 'Фамилия',
                    fieldPlaceHolder: 'Введите фамилию',
                    fieldReadonly: false,
                    fieldType: 'text',
                    fieldValue: '',
                },
            }
        },
        block2: {
            blockName: 'Block 2',
            enabled: false,
            fields: {
                birthday: {
                    fieldName: 'День рождения',
                    fieldPlaceHolder: 'Введите день рождения',
                    fieldReadonly: false,
                    fieldType: 'date',
                    fieldValue: '',
                },
                height: {
                    fieldName: 'Рост',
                    fieldPlaceHolder: 'Введите рост',
                    fieldReadonly: false,
                    fieldType: 'number',
                    fieldValue: '',
                },
            }
        },
        block3: {
            blockName: 'Block 3',
            enabled: false,
            fields: {
                city: {
                    fieldName: 'Город',
                    fieldPlaceHolder: 'Введите город',
                    fieldReadonly: false,
                    fieldType: 'text',
                    fieldValue: '',
                },
                address: {
                    fieldName: 'Улица',
                    fieldPlaceHolder: 'Введите улицу',
                    fieldReadonly: false,
                    fieldType: 'text',
                    fieldValue: '',
                },
                index: {
                    fieldName: 'Почтовый индекс',
                    fieldPlaceHolder: 'Введите почтовый индекс',
                    fieldReadonly: false,
                    fieldType: 'number',
                    fieldValue: '',
                }
            }
        }
    },
    reducers: {
        updateFieldData(state, action) {
            state[action.payload.blockId].fields[action.payload.fieldId].fieldValue = action.payload.value
        },
        changeEnabled(state, action){
            state[action.payload.blockId].enabled = action.payload.nowEnabled
        },
        changeFieldStatus(state, action){
            state[action.payload.blockId].fields[action.payload.fieldId].fieldReadonly = action.payload.readonly
        }
    }
})

export const {updateFieldData} = blocksSlice.actions;
export const {changeEnabled} = blocksSlice.actions;
export const {changeFieldStatus} = blocksSlice.actions;

export default blocksSlice.reducer;