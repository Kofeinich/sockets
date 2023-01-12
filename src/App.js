import {Layout} from "./ui/layout/Layout";
import {Panel} from "./ui/panel/Panel";
import {Block} from "./ui/block/Block";
import {useState} from "react";
import styles from './App.module.css'

export const App = () => {
    const [config, setConfig] = useState([
        {
            blockName: 'Block 1',
            fields: [
                {
                    fieldName: 'Имя',
                    fieldPlaceHolder: 'Введите имя',
                    fieldStatus: '',
                    fieldType: '',
                    fieldValue: '',
                },
                {
                    fieldName: 'Фамилия',
                    fieldPlaceHolder: 'Введите фамилию',
                    fieldStatus: '',
                    fieldType: '',
                    fieldValue: '',
                },
            ]
        },
        {
            blockName: 'Block 2',
            fields: [
                {
                    fieldName: 'День рождения',
                    fieldPlaceHolder: 'Введите день рождения',
                    fieldStatus: '',
                    fieldType: '',
                    fieldValue: '',
                },
                {
                    fieldName: 'Рост',
                    fieldPlaceHolder: 'Введите рост',
                    fieldStatus: '',
                    fieldType: '',
                    fieldValue: '',
                },
            ]
        },
        {
            blockName: 'Block 3',
            fields: [
                {
                    fieldName: 'Город',
                    fieldPlaceHolder: 'Введите город',
                    fieldStatus: '',
                    fieldType: '',
                    fieldValue: '',
                },
                {
                    fieldName: 'Улица',
                    fieldPlaceHolder: 'Введите улицу',
                    fieldStatus: '',
                    fieldType: '',
                    fieldValue: '',
                },
                {
                    fieldName: 'Почтовый индекс',
                    fieldPlaceHolder: 'Введите почтовый индекс',
                    fieldStatus: '',
                    fieldType: '',
                    fieldValue: '',
                },
            ]
        },
        ]
    )
  return (
      <Layout>
          <Panel/>
          <div className={styles.blocks}>
              {config.map((item, index) => {
                  return <Block key={index} config={item}/>
              })}
          </div>
      </Layout>
  );
}
