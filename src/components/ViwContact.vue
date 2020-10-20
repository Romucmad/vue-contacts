<template>
  <div class="vieContact">
    <div v-if="contact" class="container">
      <modal
        title="Deletion"
        message="Do you want to delete record ?"
        :name="currentDeletename"
        @close="modalOpened = false"
        @callback="deleteInfo"
        v-if="modalOpened"
      />
      <modal
        title="Editing"
        message="Do you want to revert changes ?"
        name=""
        @close="revertConfirmModal = false"
        @callback="revertEdit"
        v-if="revertConfirmModal"
      />
      <div class="row btn__back">
        <button @click="$router.back()">
          <font-awesome-icon icon="arrow-left" />
          Back
        </button>
      </div>
      <div class="row header__name">
        <h2>{{ contact.name }}</h2>
        <button @click="revert" style="float: right" class="action edit">
          <font-awesome-icon icon="undo" />
        </button>
      </div>
      <div class="row text-center">
        <form v-on:submit.prevent="onSubmit" class="w-100 mt-2">
          <input class="contact__input__submit" type="submit" value="Add" />
          <div class="contact__input__name">
            <input
              class="contact__input__key"
              v-model="name"
              type="text"
              placeholder="Name"
            />
            <input
              class="contact__input__value"
              v-model="value"
              type="text"
              placeholder="Value"
            />
          </div>
        </form>
      </div>
      <div class="row text-center mt-2">
        <table>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
          <tr v-for="item in contact.info" v-bind:key="item.id">
            <td v-if="item.id === editRowId">
              <input class="edit__input" v-model="editRowName" />
            </td>
            <td v-else>{{ item.name }}</td>

            <td v-if="item.id === editRowId">
              <input class="edit__input" v-model="editRowValue" />
            </td>
            <td v-else>{{ item.value }}</td>

            <td>
              <div v-if="item.id === editRowId">
                <button @click="save" class="action edit">
                  <font-awesome-icon icon="save" />
                </button>
                <button @click="revertConfirmModal = true" class="action edit">
                  <font-awesome-icon icon="undo" />
                </button>
              </div>
              <div v-else>
                <button @click="editRow(item.id)" class="action edit">
                  <font-awesome-icon icon="edit" />
                </button>

                <button @click="deleteClicked(item.id)" class="action trash">
                  <font-awesome-icon icon="trash" />
                </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Modal from "./Modal.vue";

export default {
  name: "vieContact",
  components: {
    Modal,
  },
  props: ["id"],
  data() {
    return {
      name: "",
      value: "",
      modalOpened: false,
      currentDeleteName: "",
      currentDeleteId: undefined,
      editRowId: undefined,
      editRowName: "",
      editRowValue: "",
      revertConfirmModal: false,
    };
  },
  watch: {
    editRowId(val) {
      console.log(val);
    },
  },
  methods: {
    ...mapActions(["addInfo", "removeInfo", "updateInfo", "revert"]),
    onSubmit() {
      this.addInfo({
        id: this.id,
        name: this.name,
        value: this.value,
      });
      this.name = "";
      this.value = "";
    },
    revertEdit() {
      this.editRowId = undefined;
    },
    save() {
      this.updateInfo({
        contractId: this.id,
        infoId: this.editRowId,
        name: this.editRowName,
        value: this.editRowValue,
      });
      this.editRowId = undefined;
    },
    editRow(infoId) {
      if (this.editRowId === infoId) this.editRowId = undefined;
      else {
        this.editRowId = infoId;
        const value = this.contact.info.find((x) => x.id === infoId);
        this.editRowName = value.name;
        this.editRowValue = value.value;
      }
    },
    deleteClicked(infoId) {
      const value = this.contact.info.find((x) => x.id === infoId);
      this.currentDeletename = `${value.name} - ${value.value}`;
      this.modalOpened = true;
      this.currentDeleteId = infoId;
    },
    deleteInfo() {
      this.removeInfo({
        contactId: this.id,
        infoId: this.currentDeleteId,
      });
    },
  },
  computed: {
    ...mapGetters(["getContactById"]),
    contact() {
      return this.getContactById(this.id);
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  table-layout: fixed;
}

td,
th {
  border: 1px solid #dddddd;
  padding: 20px 10px;
  text-align: center;
  overflow: hidden;
}

tr:nth-child(even) {
  background-color: #9cc88d;
}

.container {
  display: block;
  width: 100%;
}

.contact__input__submit {
  float: right;
  margin-left: 10px;
  padding: 8px 20px;
  float: right;
  background-color: #9cc88d;
  border: none;
  font-size: 1.2rem;
  border: 2px solid transparent;
  outline: none;
  color: white;
  width: 33%;
}

.contact__input__submit:hover {
  border: 2px solid #9cc88d;
  cursor: pointer;
  color: #9cc88d;
  background-color: transparent;
  transition: 0.33s;
}

.contact__input__name {
  overflow: hidden;
  padding-right: 0.5em;
}

.contact__input__name input {
  padding: 8px 20px;
  font-size: 1.1rem;
  width: 33%;
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(0, 0, 0, 0.5);
  outline: none;
}

.contact__input__name input:focus {
  border: 2px solid #9cc88d;
  transition: 0.33s;
}

.bad_btn {
  float: right;
  padding: 10px 15px 10px 15px;
  background-color: rgba(184, 15, 10, 0.85);
  border: none;
  font-size: 1.2rem;
  outline: none;
  color: white;
  border: 2px solid transparent;
}

.bad_btn:hover {
  cursor: pointer;
  transition: 0.3s;
  border: 2px solid rgba(0, 0, 0, 0.6);
}

.row {
  overflow: hidden;
  width: 80%;
  margin: auto;
}

.btn__back {
  margin-top: 1em;
  margin-left: 1em;
}

.btn__back button {
  padding: 5px 10px;
  cursor: pointer;
}

.header__name {
  text-align: center;
  margin-top: 2em;
}

.text-center {
  text-align: center;
}

.w-100 {
  width: 100%;
}

.contact__input__key {
  float: left;
}

.contact__input__value {
  float: right;
  width: 50% !important;
}

.mt-2 {
  margin-top: 2em;
}

.action {
  padding: 0.3em;
  cursor: pointer;
  margin-right: 0.5em;
  margin-left: 0.5em;
}

.edit__input {
  width: 75% !important;
  padding: 3px 5px;
  font-size: 0.9rem;
  width: 33%;
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid rgba(0, 0, 0, 0.5);
  outline: none;
}
</style>
