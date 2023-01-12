import {Layout} from "../ui/layout/Layout";
import {Panel} from "../ui/panel/Panel";
import {Block} from "../ui/block/Block";
import styles from './App.module.css'
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

export const App = () => {

  return (
      <Layout>
          <Panel/>
          <div className={styles.blocks}>
              <Block blockId={"block1"}/>
              <Block blockId={"block2"}/>
              <Block blockId={"block3"}/>
          </div>
      </Layout>
  );
}
