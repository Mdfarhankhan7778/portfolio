import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger, NavLink} from '@mantine/core';
import { IconHexagonLetterF, IconX } from '@tabler/icons-react';
import { navLinks } from './header';

function SideBar() {
    const [opened, {toggle}] = useDisclosure(false);

    return (
        <>

            <Drawer.Root className='md:hidden !-z-10' position='right' opened={opened} onClose={toggle} size="50vw">
                <Drawer.Overlay className='!-z-0' style={{ backgroundOpacity: 0.5, blur: 4 }} />
                <Drawer.Content  className='!-z-0'  bg="#0A192F">
                    {/* <Drawer.Header bg="#0A192F">
                       
                        <Drawer.CloseButton className='hover:!bg-bgColor hover:!text-white' icon= <IconX className='hover:text-primaryColor' size={30} stroke={2} /> />

                    </Drawer.Header> */}
                    <Drawer.Body className=' flex flex-col mt-20 gap-8' bg='#0A192F'>
                    {navLinks(true)}

                    </Drawer.Body>

                </Drawer.Content>



            </Drawer.Root>

            <Burger className='md:!hidden !z-10' size='lg' color='#64FFDA' opened={opened} onClick={toggle} />
        </>
    );
}
export default SideBar;