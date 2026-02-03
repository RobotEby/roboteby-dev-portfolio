import { Link, LinkProps, useLocation } from 'react-router-dom';
import { useNavigation } from '@/contexts/NavigationContext';
import { MouseEvent } from 'react';

interface NavLinkWithLoadingProps extends LinkProps {
  children: React.ReactNode;
}

const NavLinkWithLoading = ({ to, children, onClick, ...props }: NavLinkWithLoadingProps) => {
  const { setIsNavigating } = useNavigation();
  const location = useLocation();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== to) {
      setIsNavigating(true);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default NavLinkWithLoading;
