import { Flex, Spacer, Hide } from '@chakra-ui/react'
import { useAuth } from '../../../Providers/Auth/AuthProvider'
import { AuthGroup } from './AuthGroup/AuthGroup'
import { LogoBox } from './LogoBox/LogoBox'
import { NavToTop } from './NavToTop/NavToTop'
import { SearchBar } from './SearchBar/SearchBar'
import { UserMenu } from './UserMenu/UserMenu'

export function Header (props: {}) {
	const { isAuthenticated } = useAuth()

  return (
		<Flex minWidth='max-content' h='96px' alignItems='center' gap='2' px='2.5%'>
			<LogoBox />
			<Spacer />
			<Hide breakpoint='(max-width: 640px)'>
				<Flex dir='row' gap='12' alignItems='center'>
					<SearchBar />
					{ !isAuthenticated && <AuthGroup /> }
					{ isAuthenticated && <UserMenu /> }
				</Flex>
			</Hide>
			<NavToTop />
		</Flex>
	)
}
