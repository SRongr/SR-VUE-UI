module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
 
  themeConfig: {
    sidebarDepth: 2,
    // sidebar: 'auto',
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [ 
          // '/foo/',
          '/Button/',
          '/Checkbox/',
          '/Input/',
          // '/Checkbox/',
          '/Icon/',
          // '/Checkbox/',
          '/Modal/',
          '/Toast/',
          '/Form/'
         ]
      }
    ],
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Guide', link: '/guide/' },
    //   { text: 'External', link: 'https://google.com' },
    // ]
  }
}
