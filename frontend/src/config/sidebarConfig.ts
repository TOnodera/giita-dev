const sidebarConfig = {
    root: [
        {
            key: '0',
            label: 'メニュー',
            data: 'Documents Folder',
            icon: 'pi pi-align-justify',
            children: [
                {
                    key: '0-0',
                    label: 'Github',
                    data: 'Work Folder',
                    icon: 'pi pi-github',
                    children: [
                        {
                            key: '0-0-0',
                            label: 'OAuth認証',
                            icon: 'pi pi-key',
                            data: 'Expenses Document',
                        },
                        {
                            key: '0-0-1',
                            label: 'エクスプロール',
                            icon: 'pi pi-eye',
                            data: 'Resume Document',
                        },
                    ],
                },
                {
                    key: '0-1',
                    label: 'Qiita',
                    data: 'Home Folder',
                    icon: 'pi pi-fw pi-home',
                    children: [
                        {
                            key: '0-1-0',
                            label: '投稿',
                            icon: 'pi pi-fw pi-file',
                            data: 'Invoices for this month',
                        },
                    ],
                },
            ],
        },
        {
            key: '1',
            label: 'その他',
            data: 'Events Folder',
            icon: 'pi pi-plus',
            children: [
                {
                    key: '1-0',
                    label: 'このサイトについて',
                    icon: 'pi pi-info-circle',
                    data: 'Meeting',
                },
                {
                    key: '1-1',
                    label: '管理人について',
                    icon: 'pi pi-user',
                    data: 'Product Launch',
                },
                {
                    key: '1-2',
                    label: 'お問い合わせ',
                    icon: 'pi pi-envelope',
                    data: 'Report Review',
                },
            ],
        },
    ],
};

export default sidebarConfig;
