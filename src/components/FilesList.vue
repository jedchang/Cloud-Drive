<template>
  <div class="my-files">
    <div class="container">
      <div class="title">
        <div class="name">FILES</div>
        <div class="view-all">
          <a
            href="javascript:;"
            class="btn btn-view-list active"
          >
            <i class="material-icons">view_list</i>
          </a>
          <a
            href="javascript:;"
            class="btn btn-view-comfy"
          >
            <i class="material-icons">view_comfy</i>
          </a>
        </div>
      </div>
      <div class="files-list">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">NAME</th>
              <th scope="col">LOCATION</th>
              <th scope="col">LAST MODIFIED</th>
              <th scope="col">SIZE</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in files"
              :key="item.id"
            >
              <th scope="row"><img
                  src="../assets/ic-excel.svg"
                  alt=""
                ></th>
              <td class="name"> {{ item.name }} </td>
              <td>My Drive</td>
              <td>2019/8/20</td>
              <td>6 KB</td>
            </tr>

            <!-- <tr>
                <th scope="row"><img
                    src="../assets/ic-excel.svg"
                    alt=""
                  ></th>
                <td class="name">Ad-benefit-august.csv</td>
                <td>My Drive</td>
                <td>2019/8/20</td>
                <td>6 KB</td>
              </tr>
              <tr>
                <th scope="row"><img
                    src="../assets/ic-ppt.svg"
                    alt=""
                  ></th>
                <td class="name">How To Pick A Right Web Font.pptx</td>
                <td>My Drive</td>
                <td>2019/8/20</td>
                <td>32 MB</td>
              </tr>
              <tr>
                <th scope="row"><img
                    src="../assets/ic-pdf.svg"
                    alt=""
                  ></th>
                <td class="name">Presentation-Q1.pdf</td>
                <td>My Drive</td>
                <td>2019/8/20</td>
                <td>10 MB</td>
              </tr>
              <tr>
                <th scope="row"><img
                    src="../assets/ic-word.svg"
                    alt=""
                  ></th>
                <td class="name">New document.doc</td>
                <td>My Drive</td>
                <td>2019/8/20</td>
                <td>102 KB</td>
              </tr>
              <tr>
                <th scope="row"><img
                    src="../assets/ic-unkown.svg"
                    alt=""
                  ></th>
                <td class="name">Readme.txt</td>
                <td>My Drive</td>
                <td>2019/8/20</td>
                <td>2 KB</td>
              </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 vuex
import Vuex from 'vuex';

// npm 安裝後引入 firebase
import * as firebase from 'firebase/app';
import 'firebase/storage';

// firebase 設定檔
const firebaseConfig = {
  apiKey: 'AIzaSyDlqJiNI1HUabi0zRKU-buC87nzO6eObXg',
  authDomain: 'thef2e-storage.firebaseapp.com',
  databaseURL: 'https://thef2e-storage.firebaseio.com',
  projectId: 'thef2e-storage',
  storageBucket: 'thef2e-storage.appspot.com', // 需對應到 Stroage 中的 gs:// 路徑
  messagingSenderId: '166729742363',
  appId: '1:166729742363:web:713d7290906d6ab71a20be'
};

export default {
  name: 'FilesList',
  props: {
    msg: String
  },
  data() {
    return {
      files: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 檢查 firebase.apps 是否已經加載初始化過
      if (!firebase.apps.length) {
        // 初始化 firebase
        firebase.initializeApp(firebaseConfig);
        // console.log(firebase); // 檢測有無成功
      }

      // 讀取 firebase storage 資料
      const storageReference = firebase.storage().ref();
      storageReference.listAll().then(res => {
        console.log(res);
        this.$store.commit('init', res.items);
      });
    },
    uploadFile(e) {
      // 取得檔案資訊
      // let file = e.target.files.item(0);
      const file = e.target.files[0];
      console.log(file);

      let path = '/' + file.name;
      // 取得 storage 對應的位置
      const storageReference = firebase.storage().ref(path);
      // .put() 方法把東西丟到該位置裡
      const task = storageReference.put(file);

      storageReference.put(file).then(snapshot => {
        this.init();
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my-files {
  width: 100%;
  background-color: #f8f8f8;

  .container {
    width: 1110px;
    padding: 24px 15px;
    margin: 0 auto;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .name {
      font-size: 24px;
      font-weight: 700;
      color: #000000;
    }

    .view-all {
      width: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .btn {
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        color: #000000;
        opacity: 0.2;
        transition: all 0.4s;
        &:hover {
          color: #000000;
        }
      }
      .btn.active {
        opacity: 1;
      }
    }
  }

  .files-list {
    margin-top: 18px;
    .table {
      width: 100%;
      margin-bottom: 16px;
      background-color: transparent;
      border-collapse: collapse;

      thead {
        th {
          vertical-align: bottom;
          border-bottom: 1px solid #dee2e6;
        }
      }

      th,
      td {
        padding: 24px 12px;
        vertical-align: top;
        // border-top: 1px solid #dee2e6;
        border-bottom: 1px solid #dee2e6;
        text-align: left;
      }

      tbody {
        td {
          color: #707070;
        }
        td.name {
          color: #000;
        }
      }
    }
  }
}
</style>
