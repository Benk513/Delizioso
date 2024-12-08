import {  Avatar,  AvatarFallback,  AvatarImage,} from "@/components/ui/avatar"
import {  DropdownMenu,  DropdownMenuContent,  DropdownMenuGroup,  DropdownMenuItem,  DropdownMenuLabel,
  DropdownMenuPortal,  DropdownMenuSeparator,  DropdownMenuShortcut,  DropdownMenuSub,  DropdownMenuSubContent,
  DropdownMenuSubTrigger,  DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Bell, LogOut, MessageSquare, Search, Settings, User, UserPlus } from "lucide-react"

const ProfileHeader = () => {
    return (
        <header  className="flex justify-between items-center bg-white border-b border-gray-200 w-[100%] h-20 px-10">
            
            <form>
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search ..."
                  className="w-full border border-gray-300 rounded-xl bg-background pl-8 shadow-none md:w-2/3 lg:w-full"
                />
              </div>
            </form>

            <div className="flex items-center gap-4">


    <div className="text-black relative rounded-full flex items-center justify-center ">
        <p className="absolute -right-2 -top-4 bg-red-600 rounded-full size-6 flex items-center justify-center text-white">4</p>
        <Bell size={25} color="gray"/>
    </div>

            <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="text-2xl font-medium">User</AvatarFallback>
    </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
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
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
       
        
        <DropdownMenuSeparator />
        <DropdownMenuItem    >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
           
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        
            </div>
      </header>
    )
}

export default ProfileHeader
