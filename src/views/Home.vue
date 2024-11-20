<template>
  <div class="home">
    <NavbarMenu></NavbarMenu>
    <!-- MyDrive -->
    <div class="my-drive">
      <div class="container">
        <div class="title">
          <div class="name">MY DRIVE</div>
          <div
            class="inner-name"
            v-if="this.$store.state.currentNavbar === 'home' || ''"
          ></div>
          <div
            class="inner-name"
            v-if="this.$store.state.currentNavbar !== '' && this.$store.state.currentNavbar !== 'home'"
          ><i class="
          material-icons">keyboard_arrow_right</i> {{ this.$store.state.currentNavbar }} </div>
          <!-- <div
          class="inner-name"
        ><i class="material-icons">keyboard_arrow_right</i>Starred</div> -->
        </div>
        <div class="function-wrap">
          <label
            for="inputUpload"
            class="btn btn-upload"
            title="上傳檔案"
          >
            <input
              id="inputUpload"
              type="file"
              value="upload"
              @change="uploadFile"
            >
            <i class="material-icons">publish</i>
          </label>

          <a
            href="javascript:;"
            class="btn btn-folder"
            title="新增資料夾"
          >
            <i class="material-icons">create_new_folder</i>
          </a>

          <div class="line"><span></span></div>
          <a
            href="javascript:;"
            class="btn btn-starred"
            title="標記星號"
          >
            <i class="material-icons">star</i>
          </a>
          <a
            href="javascript:;"
            class="btn btn-download"
            title="下載檔案"
          >
            <i class="material-icons">get_app</i>
          </a>
          <a
            href="javascript:;"
            class="btn btn-links"
            title="分享連結"
          >
            <i class="material-icons">link</i>
          </a>
          <a
            href="javascript:;"
            class="btn btn-links"
            title="刪除檔案"
            @click="deleteFile"
          >
            <i class="material-icons">delete</i>
          </a>
        </div>
      </div>
    </div>

    <!-- starred -->
    <!-- <div class="my-starred">
      <div class="container">
        <div class="title">
          <div class="name">STARRED</div>
          <a
            href="javascript:;"
            class="btn btn-showAll"
          >SHOW ALL</a>
        </div>
        <div class="starred-list">
          <div class="starred-wrap folders-wrap">
            <a
              href="javascript:;"
              class="starred starred-folder"
            >
              <i class="material-icons">folder_special</i>
              <div class="starred-folder-name">Design Material</div>
            </a>
            <a
              href="javascript:;"
              class="starred starred-folder"
            >
              <i class="material-icons">folder_special</i>
              <div class="starred-folder-name">Element UI</div>
            </a>
            <a
              href="javascript:;"
              class="starred starred-folder"
            >
              <i class="material-icons">folder_special</i>
              <div class="starred-folder-name">Font Awesome</div>
            </a>
            <a
              href="javascript:;"
              class="starred starred-folder"
            >
              <i class="material-icons">folder_special</i>
              <div class="starred-folder-name">Vuex</div>
            </a>
          </div>
          <div class="starred-wrap files-wrap">
            <a
              href="javascript:;"
              class="starred starred-file"
            >
              <div class="status">
                <img
                  src="../assets/ic-word.svg"
                  alt=""
                >
                <a
                  href="javascript:;"
                  class="star"
                ><i class="material-icons">star</i></a>
              </div>
              <div class="starred-file-name">
                2019 Design Trend - Online Course.doc
              </div>
            </a>
            <a
              href="javascript:;"
              class="starred starred-file"
            >
              <div class="status">
                <img
                  src="../assets/ic-ai.svg"
                  alt=""
                >
                <a
                  href="javascript:;"
                  class="star"
                ><i class="material-icons">star</i></a>
              </div>
              <div class="starred-file-name">
                F2E-2nd-w7-chat-room.ai
              </div>
            </a>
            <a
              href="javascript:;"
              class="starred starred-file"
            >
              <div class="status">
                <img
                  src="../assets/ic-media.svg"
                  alt=""
                >
                <a
                  href="javascript:;"
                  class="star"
                ><i class="material-icons">star</i></a>
              </div>
              <div class="starred-file-name">
                Promo_video_final_version_0820.mp4
              </div>
            </a>
            <a
              href="javascript:;"
              class="starred starred-file"
            >
              <div class="status">
                <img
                  src="../assets/ic_image_24px.svg"
                  alt=""
                >
                <a
                  href="javascript:;"
                  class="star"
                ><i class="material-icons">star</i></a>
              </div>
              <div class="starred-file-name">
                IMG-003948.jpeg
              </div>
            </a>
          </div>
        </div>
      </div>
    </div> -->

    <!-- folders -->
    <div class="my-folders">
      <div class="container">
        <div class="title">
          <div class="name">FOLDERS</div>
          <div class="view-all">
            <a
              href="javascript:;"
              class="btn btn-view-list"
            >
              <i class="material-icons">view_list</i>
            </a>
            <a
              href="javascript:;"
              class="btn btn-view-comfy active"
            >
              <i class="material-icons">view_comfy</i>
            </a>
          </div>
        </div>
        <div class="folders-list">
          <a
            href="javascript:;"
            class="folder"
          >
            <i class="material-icons">folder</i>
            <div class="folder-name">Advertisement</div>
          </a>
          <a
            href="javascript:;"
            class="folder"
          >
            <i class="material-icons">folder</i>
            <div class="folder-name">Business</div>
          </a>
          <a
            href="javascript:;"
            class="folder"
          >
            <i class="material-icons">folder</i>
            <div class="folder-name">Commercial</div>
          </a>
          <a
            href="javascript:;"
            class="folder"
          >
            <i class="material-icons">folder</i>
            <div class="folder-name">Customer</div>
          </a>
          <!-- <a
            href="javascript:;"
            class="folder"
          >
            <i class="material-icons">folder</i>
            <div class="folder-name">Facebook</div>
          </a>
          <a
            href="javascript:;"
            class="folder"
          >
            <i class="material-icons">folder</i>
            <div class="folder-name">Growth Hacker</div>
          </a>
          <a
            href="javascript:;"
            class="folder"
          >
            <i class="material-icons">folder</i>
            <div class="folder-name">Motion Design</div>
          </a>
          <a
            href="javascript:;"
            class="folder"
          >
            <i class="material-icons">folder</i>
            <div class="folder-name">Web Practice</div>
          </a> -->
        </div>
      </div>
    </div>

    <!-- files -->
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
          <!-- <ul class="table">
            <li class="head">

            </li>
          </ul> -->
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">NAME <i class="material-icons">arrow_downward</i></th>
                <th scope="col">LOCATION</th>
                <th scope="col">LAST MODIFIED</th>
                <th scope="col">SIZE</th>
              </tr>
            </thead>
            <tbody>
              <!-- tr focus 效果需要加上 tabindex="0" 才可以 -->
              <tr
                v-for="item in files"
                :key="item.id"
                tabindex="0"
              >
                <th scope="row"><img
                    src="../assets/ic_image_24px.svg"
                    alt=""
                  ></th>
                <td class="name"> {{ item.name }} </td>
                <td>My Drive</td>
                <td>2019/8/20</td>
                <td>6 KB</td>
                <!-- <p @click="deleteFile">刪除</p> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <MyStorage></MyStorage>
  </div>
</template>

<script>
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

// @ is an alias to /src
import NavbarMenu from '@/components/NavbarMenu.vue';
import MyStorage from '@/components/MyStorage.vue';

export default {
  name: 'home',
  components: {
    NavbarMenu,
    MyStorage
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
      // 提交 store 中的 updateLoading 狀態
      this.$store.commit('updateLoading', true);

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
        this.files = res.items;
        // 提交 store 中的 updateLoading 狀態 => fasle
        this.$store.commit('updateLoading', false);
      });
    },
    uploadFile(e) {
      this.$store.commit('updateLoading', true);

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
      // task.on(
      //   'state_changed',
      //   next =>
      //     (this.progress = (next.bytesTransferred / next.totalBytes) * 100),
      //   error => console.log('上傳失敗'),
      //   complete => {
      //     console.log('上傳成功');
      //     this.submitHandler();
      //   }
      // );
    },
    deleteFile(e) {
      // const file = e.target.files[0];
      // let path = '/' + file.name;
      // const fileReference = firebase.storage().ref(path);
      // console.log(fileReference);
      // fileReference.delete().then(() => {
      //   this.init();
      // });
      // fileReference.listAll().then(res => {
      //   this.files = res.items;
      //   fileReference.delete();
      //   this.$store.commit('updateLoading', false);
      // });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/style/_myDrive.scss';
@import '@/style/_starredList.scss';
@import '@/style/_foldersList.scss';
@import '@/style/_filesList.scss';
</style>

