import { LogIn, LogOut, UserPlus } from "lucide-react";
import { Button } from "../ui/button"
import { PiShoppingCart } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import {  Avatar,  AvatarFallback,  AvatarImage,} from "@/components/ui/avatar"
import {  DropdownMenu,  DropdownMenuContent,  DropdownMenuGroup,  DropdownMenuItem,  DropdownMenuLabel,
  DropdownMenuPortal,  DropdownMenuSeparator,  DropdownMenuShortcut,  DropdownMenuSub,  DropdownMenuSubContent,
  DropdownMenuSubTrigger,  DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

  import {
    LifeBuoy,
    Mail,
    MessageSquare,
    PlusCircle,
    Settings,
    User,
    
  } from "lucide-react"
import useUserStore from "@/store/useUserStore";
  
   

const Action = () => {

  const user = useUserStore((state)=> state.user)
  const logout = useUserStore((state)=> state.logout)

  const isAdmin = user?.role ==="admin"
  const cartItems = user?.cartItems.length
  const userAbr = user?.name.charAt(0).toUpperCase()

  console.log(user)
 

  const navigate = useNavigate()
  return (
      <div className="flex gap-4 items-center justify-between">
         { isAdmin ?'':
          <div
           className="bg-slate-100 relative py-4 px-4 rounded-full hover:cursor-pointer"
           onClick={()=>navigate('/cart')}>
              <PiShoppingCart  size={20} /> 
              {
                cartItems > 0 ?  <div className="absolute   bg-destructive text-destructive-foreground px-2 rounded-full text-sm font-semibold top-0   translate-x-[50%] ">{cartItems}</div> : ''
              }
              
             
          </div>}

          {isAdmin ?<Button variant="secondary"><Link to='dashboard'  size="lg">Dashboard</Link></Button> :''}

          { user ? <>

            <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="text-2xl font-medium">{userAbr}</AvatarFallback>
    </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate('profile')}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
         
          </DropdownMenuItem>
                  
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
           
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
           
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem  onClick={logout} >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
           
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
             
          </> :<>
            <Button variant="primary" size="lg" onClick={()=>navigate('/login')}><LogIn size={15} className="mr-2"  /> Log in  </Button>
         <Button variant="secondary" size="lg" onClick={()=>navigate('/signup')}><UserPlus size={15} className="mr-2"/> Sign up  </Button>
          </>}

         
    </div>
  )
}
export default Action