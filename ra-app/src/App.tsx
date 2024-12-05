import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { CategoryCreate } from "./componets/CategoryCreate";
import { CategoryEdit } from "./componets/CategoryEdit";
import { CategoryList } from "./componets/CategoryList";
import { NFTCreate } from "./componets/NFTCreate.tsx";
import { NFTEdit } from "./componets/NFTEdit.tsx";
import { NFTList } from "./componets/NFTList.tsx";

const dataProvider = jsonServerProvider(import.meta.env.SERVER_URL);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="NFTs" list={NFTList} edit={NFTEdit} create={NFTCreate} />
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
  </Admin>
);

export default App;
