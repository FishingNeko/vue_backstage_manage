import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Dialog,
  Message,
  Main,
  Aside,
  Header,
  Container,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Popconfirm,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  MessageBox
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Container)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Popconfirm)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
// 弹框提示需全局挂载
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm