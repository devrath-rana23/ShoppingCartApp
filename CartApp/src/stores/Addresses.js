import {makeAutoObservable} from 'mobx';

class Addresses {
  name = '';
  mobile = '';
  pincode = '';
  locality = '';
  addressArea = '';
  addressCity = '';
  addressState = '';
  addressLandmark = '';
  alternatePhone = '';
  addressType = '';
  savedAddressItemsDummy = [
    {
      id: '1',
      name: 'Devrath',
      mobile: '9871020867',
      pincode: '110010',
      locality: 'Delhi',
      addressArea: 'Mayur Vihar',
      addressCity: 'New Delhi',
      addressState: 'NCT',
      addressLandmark: 'Qutub Minar',
      alternatePhone: '9871020876',
      addressType: 'Home',
      isSelected: false,
    },
  ];
  addressItemsDummy = [
    {
      id: 1,
      is_selected: false,
      is_dropdown: false,
      placeholder_name: 'Full Name',
      is_address: false,
      value: '',
      field_type: 'text',
      field_name: 'name',
      states_name: [],
    },
    {
      id: 2,
      is_selected: false,
      is_dropdown: false,
      placeholder_name: '10 - Digit mobile number',
      is_address: false,
      value: '',
      field_type: 'mobile',
      field_name: 'mobile',
      states_name: [],
    },
    {
      id: 3,
      is_selected: false,
      is_dropdown: false,
      placeholder_name: 'Pincode',
      is_address: false,
      value: '',
      field_type: 'integer',
      field_name: 'pincode',
      states_name: [],
    },
    {
      id: 4,
      is_selected: false,
      is_dropdown: false,
      placeholder_name: 'Locality',
      is_address: false,
      value: '',
      field_type: 'text',
      field_name: 'locality',
      states_name: [],
    },
    {
      id: 5,
      is_selected: false,
      is_dropdown: false,
      placeholder_name: 'Address (Area and Street)',
      is_address: true,
      value: '',
      field_type: 'text',
      field_name: 'addressArea',
      states_name: [],
    },
    {
      id: 6,
      is_selected: false,
      is_dropdown: false,
      placeholder_name: 'City/District/Town',
      is_address: false,
      value: '',
      field_type: 'text',
      field_name: 'addressCity',
      states_name: [],
    },
    {
      id: 7,
      is_selected: false,
      is_dropdown: true,
      placeholder_name: 'Select state',
      is_address: false,
      value: '',
      field_type: 'select',
      field_name: 'addressState',
      states_name: [
        'Uttar Pradesh',
        'Uttrakhand',
        'Himachal Pradesh',
        'Karnataka',
      ],
    },
    {
      id: 8,
      is_selected: false,
      is_dropdown: false,
      placeholder_name: 'Landmark',
      is_address: false,
      value: '',
      field_type: 'text',
      field_name: 'addressLandmark',
      states_name: [],
    },
    {
      id: 9,
      is_selected: false,
      is_dropdown: false,
      placeholder_name: 'Alternate Phone(Optional)',
      is_address: false,
      value: '',
      field_type: 'mobile',
      field_name: 'alternatePhone',
      states_name: [],
    },
  ];

  homeButtonSelected = false;
  workButtonSelected = false;

  constructor() {
    makeAutoObservable(this);
  }

  saveNewLocation = () => {
    let isSaved = false;
    let isAdrressFormReset = false;
    data = [
      ...this.savedAddressItemsDummy,
      {
        id: Math.floor(Math.random() * 1000000 + 1),
        name: this.name,
        mobile: this.mobile,
        pincode: this.pincode,
        locality: this.locality,
        addressArea: this.addressArea,
        addressCity: this.addressCity,
        addressState: this.addressState,
        addressLandmark: this.addressLandmark,
        alternatePhone: this.alternatePhone,
        addressType: this.addressType,
        isSelected: false,
      },
    ];
    isSaved = this.setSavedAddressItems(data);

    if (isSaved) {
      isAdrressFormReset = this.resetAddressForm();
      if (isAdrressFormReset) {
        return true;
      }
    }
    return false;
  };

  resetAddressForm = () => {
    this.name = '';
    this.mobile = '';
    this.pincode = '';
    this.locality = '';
    this.addressArea = '';
    this.addressCity = '';
    this.addressState = '';
    this.addressLandmark = '';
    this.alternatePhone = '';
    this.addressType = '';
    return true;
  };

  updateIsSelectedForSavedLocation = id => {
    data = this.savedAddressItemsDummy.map(item => {
      return item.id == id
        ? {
            id,
            name: item.name,
            mobile: item.mobile,
            pincode: item.pincode,
            locality: item.locality,
            addressArea: item.addressArea,
            addressCity: item.addressCity,
            addressState: item.addressState,
            addressLandmark: item.addressLandmark,
            alternatePhone: item.alternatePhone,
            addressType: item.addressType,
            isSelected: true,
          }
        : {
            id: item.id,
            name: item.name,
            mobile: item.mobile,
            pincode: item.pincode,
            locality: item.locality,
            addressArea: item.addressArea,
            addressCity: item.addressCity,
            addressState: item.addressState,
            addressLandmark: item.addressLandmark,
            alternatePhone: item.alternatePhone,
            addressType: item.addressType,
            isSelected: false,
          };
    });
    this.setSavedAddressItems(data);
  };

  updateFieldStateValue = (field_name, value) => {
    switch (field_name) {
      default:
        return null;
        break;
      case 'name':
        this.name = value;
        break;

      case 'mobile':
        this.mobile = value;
        break;

      case 'pincode':
        this.pincode = value;
        break;

      case 'locality':
        this.locality = value;
        break;

      case 'addressArea':
        this.addressArea = value;
        break;

      case 'addressCity':
        this.addressCity = value;
        break;

      case 'addressState':
        this.addressState = value;
        break;

      case 'addressLandmark':
        this.addressLandmark = value;
        break;

      case 'alternatePhone':
        this.alternatePhone = value;
        break;

      case 'addressType':
        this.addressType = value;
        break;
    }
  };

  updateValueOfTextInput = (id, value) => {
    data = this.addressItemsDummy.map(item => {
      return item.id == id
        ? {
            id,
            is_selected: item.is_selected,
            is_dropdown: item.is_dropdown,
            placeholder_name: item.placeholder_name,
            is_address: item.is_address,
            value,
            field_type: item.field_type,
            field_name: item.field_name,
            states_name: item.states_name,
          }
        : item;
    });
    this.setAddressItems(data);
  };

  updateHomeWorkButtonSelected = (is_home_selected, is_work_selected) => {
    this.homeButtonSelected = is_home_selected;
    this.workButtonSelected = is_work_selected;
  };

  updateIsSelectedForAddressItems = (id, is_selected) => {
    data = this.addressItemsDummy.map(item => {
      return item.id == id
        ? {
            id,
            is_selected,
            is_dropdown: item.is_dropdown,
            placeholder_name: item.placeholder_name,
            is_address: item.is_address,
            value: item.value,
            field_type: item.field_type,
            field_name: item.field_name,
            states_name: item.states_name,
          }
        : item;
    });
    this.setAddressItems(data);
  };

  setAddressItems = data => {
    this.addressItemsDummy = data;
  };

  setSavedAddressItems = data => {
    this.savedAddressItemsDummy = data;
    return true;
  };
}

export default Addresses;
