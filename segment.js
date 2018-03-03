// component/segment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    },
    selectTitle:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickSelectItem:function(e) {
      this.triggerEvent('clickSelectItem', {selectTitle:e.currentTarget.dataset.value});
    }
  }
})
