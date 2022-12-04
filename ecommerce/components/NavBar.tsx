import { Anchor } from '@mantine/core';

export function NavBar() {
    return (
        <div className='flex justify-around m-4'>
            <Anchor href="https://mantine.dev/" target="_blank" color="yellow">
                Home
            </Anchor>
            <Anchor href="https://mantine.dev/" target="_blank">
                Switches
            </Anchor>
            <Anchor href="https://mantine.dev/" target="_blank">
                Keyboards
            </Anchor>


        </div>
    )
}