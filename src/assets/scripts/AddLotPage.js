export default class AddLotInPage {
  constructor(сontainer, firebase) {
    this.container = сontainer;
    this.firebase = firebase;
    this.container.innerHTML = '';
  }

  createAddLotPage() {
    this.headForm = document.createElement('h2');
    this.headForm.classList.add('add_lot');
    this.headForm.innerText = 'Adding lot';
    this.container.appendChild(this.headForm);

    this.formLot = document.createElement('form');
    this.formLot.setAttribute('name', 'form_lot');
    this.formLot.classList.add('form_lot');
    this.container.appendChild(this.formLot);
    this.formLot.addEventListener('submit', this.formLotValidation);

    this.inputPhotos = document.createElement('input');
    this.inputPhotos.setAttribute('type', 'file');
    this.inputPhotos.setAttribute('class', 'input-file');
    this.inputPhotos.setAttribute('id', 'file');
    this.inputPhotos.setAttribute('name', 'file');
    this.inputPhotos.setAttribute('multiple', 'true');
    this.formLot.appendChild(this.inputPhotos);

    this.labelBtnAddPhotos = document.createElement('label');
    this.labelBtnAddPhotos.setAttribute('for', 'file');
    this.labelBtnAddPhotos.classList.add('btn');
    this.labelBtnAddPhotos.classList.add('btn-tertiary');
    this.labelBtnAddPhotos.classList.add('js-labelFile');
    this.formLot.appendChild(this.labelBtnAddPhotos);
    this.iconBtnPhotos = document.createElement('i');
    this.iconBtnPhotos.classList.add('icon');
    this.iconBtnPhotos.classList.add('fa');
    this.iconBtnPhotos.classList.add('fa-check');
    this.labelBtnAddPhotos.appendChild(this.iconBtnPhotos);
    this.contentBthPhotos = document.createElement('span');
    this.contentBthPhotos.classList.add('js-fileName');
    this.contentBthPhotos.innerText = 'Add photos';
    this.labelBtnAddPhotos.appendChild(this.contentBthPhotos);
    this.wrapPhotos = document.createElement('div');
    this.wrapPhotos.classList.add('wrap_photos');
    this.formLot.appendChild(this.wrapPhotos);

    this.inputPhotos.addEventListener('change', this.resizeImagesForMiniature);

    this.lotName = document.createElement('span');
    this.lotName.classList.add('name_lot');
    this.lotName.innerText = 'Lot name';
    this.formLot.appendChild(this.lotName);

    this.inputLotName = document.createElement('input');
    this.inputLotName.setAttribute('type', 'text');
    this.inputLotName.setAttribute('name', 'nameLot');
    this.inputLotName.setAttribute('class', 'name_lot_input');
    this.inputLotName.setAttribute('placeholder', 'For example, phone');
    this.formLot.appendChild(this.inputLotName);

    this.lotCategory = document.createElement('span');
    this.lotCategory.classList.add('category_lot');
    this.lotCategory.innerText = 'Category selection';
    this.formLot.appendChild(this.lotCategory);

    this.listCategory = document.createElement('select');
    this.listCategory.setAttribute('name', 'category');
    this.listCategory.classList.add('select_category');
    this.listCategory.innerHTML = `
      <option disabled>Category</option>
      <option value="Appliances">Appliances</option>
      <option value="Bijouterie">Bijouterie</option>
      <option value="Books">Books</option>
      <option value="Сlothes">Сlothes</option>
      <option value="Computer technology">Computer technology</option>
      <option value="Electronics">Electronics</option>
      <option value="Furniture">Furniture</option>
      <option value="Pet">Pet</option>
      <option value="Plants">Plants</option>
      <option value="Tool">Tool</option>
      `;
    this.formLot.appendChild(this.listCategory);

    this.lotDescription = document.createElement('span');
    this.lotDescription.classList.add('description_lot');
    this.lotDescription.innerText = 'Lot Description';
    this.formLot.appendChild(this.lotDescription);

    this.areaDescription = document.createElement('textarea');
    this.areaDescription.setAttribute('name', 'descriptionLot');
    this.areaDescription.setAttribute('placeholder', 'Minimum 20 characters');
    this.areaDescription.classList.add('description_lot_input');
    this.formLot.appendChild(this.areaDescription);

    this.karmaCount = document.createElement('span');
    this.karmaCount.classList.add('karma_count_lot');
    this.karmaCount.innerText = 'Karma amount';
    this.formLot.appendChild(this.karmaCount);

    this.inputKarmaCount = document.createElement('input');
    this.inputKarmaCount.setAttribute('name', 'karma');
    this.inputKarmaCount.setAttribute('type', 'text');
    this.inputKarmaCount.setAttribute('class', 'karma_count_lot_input');
    this.inputKarmaCount.setAttribute('placeholder', '0');
    this.formLot.appendChild(this.inputKarmaCount);

    this.btnSubmit = document.createElement('input');
    this.btnSubmit.setAttribute('type', 'submit');
    this.btnSubmit.setAttribute('value', 'Add an advert');
    this.btnSubmit.classList.add('lot_submit');
    this.formLot.appendChild(this.btnSubmit);
  }

  formLotValidation = (e) => {
    e.preventDefault();
    const listMessage = document.querySelectorAll('.message_err');
    listMessage.forEach((elem) => { elem.remove(); });
    if (this.wrapPhotos.children.length === 0) {
      this.labelBtnAddPhotos.after(this.createMessageError('add photos'));
    }
    if (this.formLot.nameLot.value.length === 0) {
      this.formLot.nameLot.after(this.createMessageError('add lot name'));
    }
    if (this.formLot.descriptionLot.value.length < 20) {
      this.formLot.descriptionLot.after(this.createMessageError('describe the lot in more detail'));
    }
    if (this.formLot.karma.value < 0 || this.formLot.karma.value === '') {
      this.formLot.karma.after(this.createMessageError('enter a positive number'));
    }
  }

  createMessageError(str) {
    this.messageError = document.createElement('span');
    this.messageError.classList.add('message_err');
    this.messageError.innerText = str;
    return this.messageError;
  }

  resizeImagesForMiniature = (e) => {
    const MAX_WIDTH = 150;
    const MAX_HEIGHT = 150;
    for (let i = 0; i < e.target.files.length; i += 1) {
      const img = document.createElement('img');
      img.src = window.URL.createObjectURL(e.target.files[i]);
      this.contain = document.createElement('div');
      this.contain.classList.add('contain_photo');
      const deleteBtn = document.createElement('div');
      deleteBtn.classList.add('btn_delete_photo');
      this.contain.appendChild(deleteBtn);
      // eslint-disable-next-line no-shadow
      deleteBtn.addEventListener('click', (e) => { e.target.parentElement.remove(); });
      const canvas = document.createElement('CANVAS');
      const ctx = canvas.getContext('2d');
      img.onload = () => {
        let { width } = img;
        let { height } = img;
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
        if (height < MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
        canvas.width = width;
        canvas.height = height;
        if (height > MAX_HEIGHT) {
          ctx.drawImage(img, 0, -((height - 200) / 2), width, height);
        } else {
          ctx.drawImage(img, -((width - 200) / 2), 0, width, height);
        }
      };
      this.wrapPhotos.appendChild(this.contain);
      this.contain.appendChild(canvas);
    }
  }

  resizeImagesForServer() {
    const arrImages = [];
    const MAX_WIDTH = 800;
    const MAX_HEIGHT = 600;
    for (let i = 0; i < this.files.length; i += 1) {
      const img = document.createElement('img');
      img.src = window.URL.createObjectURL(this.files[i]);
      const contain = document.createElement('div');
      contain.classList.add('contain');
      const canvas = document.createElement('CANVAS');
      const ctx = canvas.getContext('2d');
      img.onload = () => {
        let { width } = img;
        let { height } = img;
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const dataurl = canvas.toDataURL('image/png', 0.99);
        arrImages.push(dataurl);
      };
    }
    return arrImages;
  }
}
