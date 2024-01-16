const sidebarMenu = [
  {
    label: 'Google',
    link: 'https://www.google.com',
  },
  {
    label: 'GitHub',
    link: 'https://www.github.com',
  },
  {
    label: 'OpenAI',
    link: 'https://www.openai.com',
    sublink: [
      { label: 'GPT Models', link: 'https://www.openai.com/gpt' },
      {
        label: 'Research Publications',
        link: 'https://www.openai.com/research',
        sublink: [
          {
            label: 'Recent Papers',
            link: 'https://www.openai.com/research/recent',
          },
          {
            label: 'Archived Papers',
            link: 'https://www.openai.com/research/archived',
          },
          {
            label: 'OpenAI 2',
            link: 'https://www.openai.com',
            sublink: [
              { label: 'GPT Models', link: 'https://www.openai.com/gpt' },
              {
                label: 'Research Publications',
                link: 'https://www.openai.com/research',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Example',
    link: 'https://www.example.com',
    sublink: [
      { label: 'Sublink 1', link: 'https://www.example.com/sublink1' },
      { label: 'Sublink 2', link: 'https://www.example.com/sublink2' },
      {
        label: 'OpenAI',
        link: 'https://www.openai.com',
        sublink: [{ label: 'GPT Models', link: 'https://www.openai.com/gpt' }],
      },
    ],
  },
];

const useSidebar = () => {
  return {
    sidebarMenu,
  };
};

export default useSidebar;
