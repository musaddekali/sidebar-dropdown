import Link from 'next/link';
import useSidebar from '../Sidebar/useSidebar';

const Submenu = ({ menu }: any) => {
  if (menu.sublink?.length) {
    return (
      <li className="pl-3">
        <span>{menu.label} +</span>
        <ul>
          {menu.sublink.map((subL: any) => (
            <Submenu menu={subL} />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li>
        <Link href={menu.link || '#'}>
          <span className="text-blue-500 p-1 block leading-none">
            {menu.label}
          </span>
        </Link>
      </li>
    );
  }
};

const Sidebar = () => {
  const { sidebarMenu } = useSidebar();
  return (
    <aside className="w-[250px] shrink-0 p-4">
      <h3 className="text-xl mb-3">Sidemenu</h3>
      <nav>
        <ul>
          {sidebarMenu.length !== 0 &&
            sidebarMenu.map((menu, index) => {
              return <Submenu key={index} menu={menu} />;
            })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
