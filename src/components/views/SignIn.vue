<script lang="ts">
export default {
  data() {
    return {
      showDropdown: false,
      selectedLanguage: "English", // Default language
      languages: [
        { code: "en", name: "English" },
        { code: "fr", name: "French" },
        // Add more languages as needed
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectLanguage(language) {
      this.selectedLanguage = language.name;
      this.showDropdown = false;
      // Emit an event or call a method to handle language change
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="left">
      <div class="language-dropdown">
        <img
          src="/src/assets/img/flags/united-kingdom.png"
          width="45"
          height="38"
          alt="language-logo"
        />
        <button @click="toggleDropdown">
          {{ selectedLanguage }}
          <ul v-if="showDropdown">
            <li
              v-for="language in languages"
              :key="language.code"
              @click="selectLanguage(language)"
            >
              {{ language.name }}
            </li>
          </ul>

          <svg
            width="19"
            height="9"
            viewBox="0 0 19 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9447 0.593109L17.9448 0.593087C18.103 0.468968 18.3984 0.468981 18.5565 0.593067C18.6197 0.642632 18.6197 0.678171 18.6197 0.681754V0.681791V0.68183C18.6197 0.68541 18.6197 0.720929 18.5566 0.770473L18.5565 0.770528L9.86593 7.58871L9.86587 7.58876C9.80096 7.6397 9.69196 7.68182 9.56006 7.68182C9.42814 7.68182 9.31917 7.63973 9.25419 7.58875L8.95179 7.9742L9.25418 7.58875L0.563176 0.770569C0.563174 0.770568 0.563172 0.770567 0.563171 0.770565C0.49999 0.720996 0.499999 0.685462 0.5 0.681879V0.681841V0.681803C0.499999 0.678219 0.49999 0.642683 0.563176 0.593113L0.563208 0.593087C0.721389 0.468968 1.01681 0.468981 1.17498 0.593067L1.17498 0.59307L9.25144 6.92916L9.56007 7.17128L9.86869 6.92915L17.9447 0.593109Z"
              fill="black"
              stroke="black"
            />
          </svg>
        </button>
      </div>

      <div class="form">
        <div class="form-frame">
          <div class="logo">
            <img
              src="/src/assets/img/logo/Smartshore_logo-black.png"
              width="482"
              height="77"
              alt="logo"
            />
          </div>
          <h2>Dashboard Sign In</h2>
          <p>Please enter your details.</p>

          <div class="sign-in-form">
            <label>Username</label><br />
            <input type="text" name="uname" required /><br />
            <label>Password</label><br />
            <input
              type="password"
              name="psw"
              class="fa fa-fw fa-eye field-icon toggle-password"
              required
            /><br />
            <div class="permissions">
              <input type="checkbox" name="remember" /> Remember me
              <span class="psw"> <a href="#">Forgot password?</a></span
              ><br />
            </div>
            <button type="submit">Sign In</button><br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.container
    width:50%

.left
   position: relative
   text-align: center

.language-dropdown
    margin-top: 20px
    margin-left: 20px
    text-align: left
    display: block
    position: relative

    ul
        font-size: 1.4rem
        font-weight: 100
        text-align: center
        vertical-align: middle
        position: absolute
        top:10px
        margin-left:10px
        cursor: pointer

.language-dropdown button
    position: absolute
    margin-left: 10px
    top: 12px
    background: none


.form
    position: absolute
    top:50%
    width:100%
    height: auto
.form .form-frame
    width: 482px
    height: auto
    text-align: center
    margin-left: 50%
    margin-top:25%

    h2
       font-size: 3.6rem
       font-weight: medium
       color:#000
       padding:2rem 0

    p
       font-size: 1.6rem
       color:#BABFC5
        font-weight: reg
       padding:2rem 0

.logo
    padding:2rem 0

.sign-in-form label
    position: absolute
    margin-left: 53%
    color:#8A92A6
    font-size: 1.6rem
    font-weight: 100
    left:0

.sign-in-form input
    border:1px solid #0057D3
    width:436px
    height:44px
    margin-top: 14px
    margin-bottom:14px

.permissions
    position: absolute
    left:53%
.permissions span
        font-size: 1.6rem
        color:#0057D3

        // right:100%
.permissions input
        // position: absolute
        left:0
        width:16px
        height:16px
        font-size: 1.6rem
        color:#8A92A6
        font-weight: 100

.sign-in-form button
    background-color: #0057D3
    color:#fff
    width:188px
    height:44px
    border-radius: 4px
    font-size: 1.6rem
    font-weight: 100
    margin:30px 0
    cursor: pointer


.right-side
    position: relative
    width:100%
    height: auto
    right:0
</style>
