`use client`
import Image from "next/image";
import Link from "next/link";
/* By default all the components or pages that we will creating are serves as server components by default.
  what will be the advantage of server components:
    1) whenever you need any kind of data fishing concepts or you need to fetch data from server , this components what as the name suggest it will basically face the data on the server side.
    now in that case it will be much more faster because data can be cast and also the main the reason is that the security will be more.. so this is one of the very big reason that you should always fetch data in server components. 
    now on the other side is client components in which scenerios that you need to use. for ex. 
    lets say you need to add some kind of interactivity so you have a button and on click of this button you want to do something you need to use some useeffect and you need to handle some side effects.you need to add some usestate for state management or usereducer so in these scenerios you basically use clientcompoents.
    
    

    HOW YOU CAN CREATE SERVER COMPOENTS OR CLIENT COMPOENTS

    so i alreadt says by default all the components is server componets. to make these compoents to client components ,
    we just have to use this client directive at the top of any particular page.
      example:
      --------------------------------------------------------------------------------------------
            `use client`
      ---------------------------------------------------------------------------------------------

      ADVANTAGE OF CLIENT COMPONENTS
        1) one of the advantage of client compoents is that you will be able to use all the react hooks and   one of the restriction is that you cant use a react hook inside a server compoents.








    -------------------------------------------------------------------------------------
          PAGE.JS FILE
    ---------------------------------------------------------------------------------
    now lets understand the very basic concept ,, basically the page.js file or how you can create a routes ,
    now notice is that it is very very important if you some idea on nextjs 12 version , so in the next js 12 version we basically call this one as a concept of index route . so that means whatever route that you will be creatinh you have to basically give the name of index.js .
    now here in nextjs 13 version they have to introduce the comcept of this nextjs file .
    so that whatever page that you will be creatinh 
    so each and every page will be considred as a route . it can be a normal like root level route , it can be nested route , it can be a dynamic route.whatever you need to basically give the page file as page.js. all right this is very important.

    now just change this file name into something else then it will return an error "page not found " because it isnot gettinh page.js file on the root level becuase we dont have anythinh that means this is a root level.

    so that is the reason you have to basically give the name as page.js file. whenever you will creat any compoents.
*/
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Welcome to next js course</h1>
     <Link href={"/products"}>This is product page</Link>
    </main>
  );
}









/*
-------------------------------------
NOW WHAT ABOUT ROUTES
------------------------------------
routes and nested loop is very easy to do
what will happen if i have some 100 params after this all right, everythime i will creaye new folder in the nested level that is not the case 
so to achive this goal we have a different concerpt like catch all routes so that we are going to learn later but befor lets understand now the concept of dynamic routes.

see dynamic routes folders acitivity.

lets say dynamic page have 10 products and everytime i will click on each on every product it will goto a product details page.
now you might think that now this is very simple so what we can do inside these products
i will create 10 subfolders will products id 1 2 3 4 it will not work like that because the ID of the product can be anything so it is dynamic value. so that is the reason we have the concept of dynamic page
step:
  1) create folder like [foldername]
  2) inside this folder , create page.js file

    http://localhost:3000/dynamic-routes/products/dkd  -> it will work perfectly, this use for single slug
    http://localhost:3000/dynamic-routes/products/dkd/kdd -> it will not work perfectly, showing page not found 

  if we have multiple slugs or params in url then we can handle this by this method:

  step1: create a folder like [...foldername]
  rest all things are same.



*******************************************************************
      how will be navigate from one page to another page
*******************************************************************
  there are multiple ways to link the component

  first method:
  ------------
      <Link href="path" >text</Link>

  second method:
  --------------
    by using useRouter hook-> useRouter->next/navigation
      import { useRouter } from 'next/navigation'
            yaad rkhna ki next/navigation se liya gya hai
      const router=useRouter();
      -> it will return 6 methods:
        back-> to back
        forward -> to forward
        prefetch-> to fetch the component before rendering
        replace-> to replace the current url with something else.
        push->
        refresh-> to refresh the current page
        fastRefresh-> to fast refresh the current page.

    Now the next step is to how to navigate in server components.

    ->we can do that through the help of redirect() method
    ex is given in account folder.






    -----------------------------------------------------------------
          notes related to URL
    --------------------------------------------------------------------
    how we get current url?
    -> for getting it 
        for client components
            const pathName=useParams() -> return current url path
            ex . when i hit this url http://localhost:3000/cart
              it return /cart

  what if want to fetch value from url
  then we can do that as 
      http://localhost:3000/cart?search=4

      for doing that,
      for client compoents:
      const searchParams=useSearchParams()
      console.log(searchParams.get('search'))-> it will return search value which is 4

      http://localhost:3000/cart?search=4&random=rikdkd
       console.log(searchParams.get('search'),seachParams.get('random'))-> it will return search value which is 4 rikdkd
      

       for server compoents:
       remenber this is our dynamic page-> http://localhost:3000/dynamic-routes/products/45
       and this can be use as an api calls to the server.
       suppose , this 45 balue , i need to pass in api so how can i do that.
       so lets see
       in this url product folder is dynamic page this will automatically give params props in the server components.

       now how can we use searchparams in server components,
       same as in this url product folder is dynamic page this will automatically give searchParams prop in the server compoents.



       ===============================================================
            LOADING UI
      ============================================================
      this is special file that we create and the name has to be loading.js and this will created with react suspense .
      it will show you a instant loading state while you will naviagete from one page to another.



      =================================================================
            page not found page
      ===============================================================
        it is very easy to do that by simply add not-found.js file in root. and all right.


      =================================================================
      HOW TO FETCH DATA ON SERVER COMPONANET AND CLIENT COMPONENTS
      ======================================================================
        the main aadvantage of server based componets is that most of the time you can fetch data in a server compoents .
        it will be much more faster than client base component because there will be facibility like caching and like revaidating kind of concept then also be the security will be more so it is always adviseble the you can use the server side component as a data fetching .

*/
