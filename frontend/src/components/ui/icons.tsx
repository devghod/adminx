function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g fill='none'>
        <path
          fill='currentColor'
          fillOpacity='0.16'
          d='M15 22h3.6a2.4 2.4 0 0 0 2.4-2.412V8.332c0-.382-.18-.734-.48-.965L12.7 2.24a1.195 1.195 0 0 0-1.44 0L3.48 7.367c-.3.231-.48.583-.48.965v11.256A2.4 2.4 0 0 0 5.4 22H9v-9.2c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8z'
        />
        <path
          stroke='currentColor'
          strokeMiterlimit='10'
          strokeWidth='1.5'
          d='M18.6 22H5.4A2.4 2.4 0 0 1 3 19.588V8.332c0-.382.18-.734.48-.965l7.78-5.126a1.195 1.195 0 0 1 1.44 0l7.82 5.126c.3.231.48.583.48.965v11.256A2.4 2.4 0 0 1 18.6 22Z'
        />
        <path
          stroke='currentColor'
          strokeMiterlimit='10'
          strokeWidth='1.5'
          d='M9.8 12h4.4c.44 0 .8.36.8.8V22H9v-9.2c0-.44.36-.8.8-.8Z'
        />
      </g>
    </svg>
  );
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='8' cy='21' r='1' />
      <circle cx='19' cy='21' r='1' />
      <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
    </svg>
  );
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m7.5 4.27 9 5.15' />
      <path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
      <path d='m3.3 7 8.7 5 8.7-5' />
      <path d='M12 22V12' />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M12 13c2.396 0 4.575.694 6.178 1.671c.8.49 1.484 1.065 1.978 1.69c.486.616.844 1.352.844 2.139c0 .845-.411 1.511-1.003 1.986c-.56.45-1.299.748-2.084.956c-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C7.425 13.694 9.605 13 12 13'
      />
      <path
        fill='currentColor'
        d='M12 2c3.849 0 6.255 4.167 4.33 7.5A5 5 0 0 1 12 12c-3.849 0-6.255-4.167-4.33-7.5A5 5 0 0 1 12 2'
        opacity='0.3'
      />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
    >
      <path
        fill='currentColor'
        d='M10 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4.51 7.326a.78.78 0 0 1-.358-.442a3 3 0 0 1 4.308-3.516a6.48 6.48 0 0 0-1.905 3.959q-.034.335.025.654a5 5 0 0 1-2.07-.655m14.95.654a5 5 0 0 0 2.07-.654a.78.78 0 0 0 .357-.442a3 3 0 0 0-4.308-3.517a6.48 6.48 0 0 1 1.907 3.96a2.3 2.3 0 0 1-.026.654M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5.304 16.19a.84.84 0 0 1-.277-.71a5 5 0 0 1 9.947 0a.84.84 0 0 1-.277.71A6.98 6.98 0 0 1 10 18a6.97 6.97 0 0 1-4.696-1.81'
      />
    </svg>
  );
}

function UsersNetworkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <path
        fill='currentColor'
        d='M11.5 6A3.514 3.514 0 0 0 8 9.5c0 1.922 1.578 3.5 3.5 3.5S15 11.422 15 9.5S13.422 6 11.5 6m9 0A3.514 3.514 0 0 0 17 9.5c0 1.922 1.578 3.5 3.5 3.5S24 11.422 24 9.5S22.422 6 20.5 6m-9 2c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5m9 0c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5s-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5M7 12c-2.2 0-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 2 23h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.04 5.04 0 0 0-2.219-4.156C10.523 18.117 11 17.114 11 16c0-2.2-1.8-4-4-4m5 11c-.625.836-1 1.887-1 3h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.02 5.02 0 0 0-1-3c-.34-.453-.75-.84-1.219-1.156C19.523 21.117 20 20.114 20 19c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5 5 0 0 0 12 23m8 0h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.04 5.04 0 0 0-2.219-4.156C28.523 18.117 29 17.114 29 16c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.113.477 2.117 1.219 2.844A5.04 5.04 0 0 0 20 23M7 14c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m18 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m-9 3c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2'
      />
    </svg>
  );
}

function LineChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='256'
      height='256'
      viewBox='0 0 256 256'
    >
      <g fill='currentColor'>
        <path
          d='M224 64v144H32V48h176a16 16 0 0 1 16 16'
          opacity='0.2'
        />
        <path d='M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v94.37L90.73 98a8 8 0 0 1 10.07-.38l58.81 44.11L218.73 90a8 8 0 1 1 10.54 12l-64 56a8 8 0 0 1-10.07.38l-58.81-44.09L40 163.63V200h184a8 8 0 0 1 8 8' />
      </g>
    </svg>
  );
}

function LogOutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M16 2h-1c-2.829 0-4.242 0-5.121.879S9 5.172 9 8v8c0 2.829 0 4.243.879 5.122c.878.878 2.292.878 5.119.878H16c2.828 0 4.242 0 5.121-.879C22 20.243 22 18.828 22 16V8c0-2.828 0-4.243-.879-5.121S18.828 2 16 2'
        opacity='0.5'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M15.75 12a.75.75 0 0 0-.75-.75H4.027l1.961-1.68a.75.75 0 1 0-.976-1.14l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 .976-1.14l-1.96-1.68H15a.75.75 0 0 0 .75-.75'
        clipRule='evenodd'
      />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

function GearIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='25'
      viewBox='0 0 24 25'
    >
      <path
        fill='currentColor'
        d='M4.253 5.397a1.492 1.492 0 0 0 2.23-1.288h1.5a1.492 1.492 0 0 0 2.231 1.288l.75 1.298c.417-.233.916-.387 1.424-.478q-.046-.135-.12-.264l-.759-1.313a1.49 1.49 0 0 0-2.025-.553A1.49 1.49 0 0 0 7.992 2.61H6.476c-.82 0-1.485.66-1.492 1.478a1.49 1.49 0 0 0-2.026.553L2.2 5.953c-.41.71-.17 1.616.534 2.031a1.49 1.49 0 0 0-.534 2.031l.758 1.313c.41.71 1.314.955 2.026.553c.006.618.388 1.147.928 1.368c-.003-.571.14-1.15.447-1.68l.068-.118a1.494 1.494 0 0 0-2.174-.88l-.75-1.299c.985-.576.985-2 0-2.576z'
      />
      <path
        fill='currentColor'
        d='M7.234 9.484a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M11.64 15.11a3.065 3.065 0 1 1 6.13 0a3.065 3.065 0 0 1-6.13 0m3.066-1.564a1.565 1.565 0 1 0 0 3.13a1.565 1.565 0 0 0 0-3.13'
        clipRule='evenodd'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M7.658 17.903a1.833 1.833 0 0 1 .671-2.505a.333.333 0 0 0 0-.576a1.833 1.833 0 0 1-.67-2.504l1.106-1.916a1.833 1.833 0 0 1 2.503-.67a.332.332 0 0 0 .499-.288c0-1.012.82-1.833 1.832-1.833h2.213c1.013 0 1.833.821 1.833 1.833c0 .256.277.416.498.288a1.83 1.83 0 0 1 2.503.67l1.107 1.918a1.83 1.83 0 0 1-.67 2.502a.332.332 0 0 0 0 .576a1.833 1.833 0 0 1 .67 2.503l-1.105 1.916a1.833 1.833 0 0 1-2.504.671a.333.333 0 0 0-.5.288c0 1.013-.82 1.833-1.832 1.833H13.6a1.833 1.833 0 0 1-1.833-1.832a.333.333 0 0 0-.5-.288a1.833 1.833 0 0 1-2.503-.671zm1.421-1.206a.333.333 0 0 0-.122.456l1.106 1.915c.092.16.295.214.455.122c1.221-.705 2.749.176 2.749 1.587c0 .183.149.332.333.332h2.212a.333.333 0 0 0 .333-.333c0-1.41 1.527-2.292 2.749-1.587c.16.092.363.037.455-.122l1.106-1.916a.333.333 0 0 0-.122-.454c-1.221-.705-1.222-2.468 0-3.174a.33.33 0 0 0 .121-.453l-1.107-1.917a.33.33 0 0 0-.454-.122c-1.221.706-2.748-.177-2.748-1.587a.333.333 0 0 0-.333-.333H13.6a.33.33 0 0 0-.332.333c0 1.41-1.527 2.292-2.749 1.586a.333.333 0 0 0-.454.122l-1.106 1.916a.333.333 0 0 0 .122.455c1.222.705 1.22 2.47 0 3.174'
        clipRule='evenodd'
      />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z'
      />
    </svg>
  );
}

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        fillOpacity='0.25'
        d='m13.5 5.5l-7.047 7.047c-.225.225-.337.337-.408.476c-.072.139-.098.296-.15.61l-.78 4.677c-.052.314-.079.472.012.563s.249.064.563.012l4.678-.78c.313-.052.47-.078.61-.15c.138-.071.25-.183.475-.408L18.5 10.5c1.017-1.017 1.526-1.526 1.638-2.137c.045-.24.045-.486 0-.726c-.112-.611-.62-1.12-1.638-2.137s-1.526-1.526-2.137-1.638a2 2 0 0 0-.726 0c-.611.112-1.12.62-2.137 1.638'
      />
      <path
        fill='currentColor'
        d='m12.293 6.707l-5.84 5.84c-.225.225-.337.337-.408.476c-.072.139-.098.296-.15.61l-.78 4.677c-.052.314-.079.472.012.563s.249.064.563.012l4.678-.78c.313-.052.47-.078.61-.15c.138-.071.25-.183.475-.408l5.84-5.84c.333-.333.5-.5.5-.707s-.167-.374-.5-.707l-3.586-3.586c-.333-.333-.5-.5-.707-.5s-.374.167-.707.5'
      />
    </svg>
  );
}

function ViewIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        fillOpacity='0.25'
        d='M20.188 10.934c.388.472.582.707.582 1.066s-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18s-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066s.194-.594.582-1.066C5.232 9.21 8.364 6 12 6s6.768 3.21 8.188 4.934'
      />
      <circle cx='12' cy='12' r='3' fill='currentColor' />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g fill='none'>
        <circle
          cx='12'
          cy='12'
          r='9'
          fill='currentColor'
          fillOpacity='0.25'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeWidth='1.2'
          d='m9 9l6 6m0-6l-6 6'
        />
      </g>
    </svg>
  );
}

function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M6.6 11.397c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c2.715 0 4.073 0 4.916.847c.844.847.844 2.21.844 4.936v4.82c0 2.726 0 4.089-.844 4.936c-.843.847-2.201.847-4.916.847h-2.88c-2.716 0-4.073 0-4.917-.847s-.843-2.21-.843-4.936z'
      />
      <path
        fill='currentColor'
        d='M4.172 3.172C3 4.343 3 6.229 3 10v2c0 3.771 0 5.657 1.172 6.828c.617.618 1.433.91 2.62 1.048c-.192-.84-.192-1.996-.192-3.66v-4.819c0-2.726 0-4.089.843-4.936c.844-.847 2.201-.847 4.917-.847h2.88c1.652 0 2.8 0 3.638.19c-.138-1.193-.43-2.012-1.05-2.632C16.657 2 14.771 2 11 2S5.343 2 4.172 3.172'
        opacity='0.5'
      />
    </svg>
  );
}

function DotsHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0'
      />
    </svg>
  );
}

function AddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g fill='none'>
        <circle
          cx='12'
          cy='12'
          r='9'
          fill='currentColor'
          fillOpacity='0.25'
        />
        <path
          stroke='currentColor'
          strokeLinecap='square'
          strokeLinejoin='round'
          strokeWidth='1.2'
          d='M12 8v8m4-4H8'
        />
      </g>
    </svg>
  );
}

function EyeOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M12 4c4.29 0 7.863 2.429 10.665 7.154l.22.379l.045.1l.03.083l.014.055l.014.082l.011.1v.11l-.014.111a1 1 0 0 1-.026.11l-.039.108l-.036.075l-.016.03c-2.764 4.836-6.3 7.38-10.555 7.499L12 20c-4.396 0-8.037-2.549-10.868-7.504a1 1 0 0 1 0-.992C3.963 6.549 7.604 4 12 4m0 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6'
      />
    </svg>
  );
}

function EyeClosedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M2.69 6.705a.75.75 0 0 0-1.38.59zm12.897 6.624l-.274-.698zm7.102-6.034a.75.75 0 0 0-1.378-.59zM19 11.13l-.513-.547zm-7 2.121c-3.224 0-5.539-1.605-7.075-3.26a13.6 13.6 0 0 1-1.702-2.28a12 12 0 0 1-.507-.946l-.022-.049l-.004-.01l-.001-.001L2 7l-.69.296h.001l.001.003l.003.006l.04.088q.039.088.117.243c.103.206.256.496.462.841c.41.69 1.035 1.61 1.891 2.533C5.54 12.855 8.224 14.75 12 14.75zm3.313-.62c-.97.383-2.071.62-3.313.62v1.5c1.438 0 2.725-.276 3.862-.723zM22 7l-.69-.296h.001v.002l-.007.013l-.028.062a12 12 0 0 1-.64 1.162a13.3 13.3 0 0 1-2.15 2.639l1.027 1.094a14.8 14.8 0 0 0 3.122-4.26l.039-.085l.01-.024l.004-.007v-.003h.001v-.001zm-3.513 3.582c-.86.806-1.913 1.552-3.174 2.049l.549 1.396c1.473-.58 2.685-1.444 3.651-2.351z'
      />
      <path
        fill='currentColor'
        d='M12.75 14a.75.75 0 0 0-1.5 0zm3.466-1.08a.75.75 0 1 0-1.257.818zm-7.175.818a.75.75 0 0 0-1.257-.818zm-2.67 1.353a.75.75 0 0 0 1.258.818zm13.16-4.492a.75.75 0 1 0-1.061 1.06zm.439 2.56a.75.75 0 1 0 1.06-1.06zM11.25 16.5a.75.75 0 0 0 1.5 0zm5.121-.59a.75.75 0 1 0 1.258-.819zm-10.84-4.25a.75.75 0 1 0-1.061-1.061zm-2.561.439a.75.75 0 1 0 1.06 1.06zm4.814.82l-1.413 2.172l1.258.818l1.412-2.171zm10.686-1.26l1.5 1.5l1.06-1.06l-1.5-1.5zM11.25 14v2.5h1.5V14zm3.709-.262l1.412 2.171l1.258-.818l-1.413-2.171zm-10.49-3.14l-1.5 1.5L4.03 13.16l1.5-1.5z'
        opacity='0.5'
      />
    </svg>
  );
}

function LoadingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className='motion-safe:animate-spin'
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 48 48'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='4'
        d='M24 4v4m10-1.32l-2 3.464M41.32 14l-3.464 2M44 24h-4m1.32 10l-3.464-2M34 41.32l-2-3.464M24 44v-4m-10 1.32l2-3.464M6.68 34l3.464-2M4 24h4M6.68 14l3.464 2M14 6.68l2 3.464'
      />
    </svg>
  );
}

function ReloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027'
      />
    </svg>
  );
}

function BackIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1'
      />
    </svg>
  );
}

function LightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 64 64'
    >
      <path
        fill='#fbb041'
        d='M62.713 30.827L50.77 27.352a21.2 21.2 0 0 0-2.311-5.603q2.981-5.462 5.967-10.922c.544-.996-.541-2.086-1.539-1.538l-10.878 5.974a20.9 20.9 0 0 0-5.673-2.362c-1.183-4.03-2.365-8.06-3.548-12.1c-.313-1.071-1.853-1.075-2.168 0c-1.173 4.04-2.349 8.07-3.524 12.11a21.1 21.1 0 0 0-5.576 2.316c-3.666-2-7.333-4.01-10.999-6.01c-.994-.543-2.085.543-1.537 1.541l6.03 10.978a21 21 0 0 0-2.324 5.634L.805 30.854c-1.07.314-1.076 1.856 0 2.168l11.889 3.459a21.3 21.3 0 0 0 2.389 5.729q-2.967 5.426-5.932 10.854c-.546.996.539 2.087 1.537 1.54q5.42-2.978 10.841-5.953a21 21 0 0 0 5.636 2.332q1.74 5.945 3.483 11.883c.315 1.074 1.856 1.076 2.168 0q1.729-5.933 3.454-11.867a21.1 21.1 0 0 0 5.697-2.353l10.774 5.888a.95.95 0 0 0 .739.211c.272-.016.514-.141.702-.325c.208-.192.35-.451.367-.745a.96.96 0 0 0-.218-.743c-1.966-3.583-3.937-7.169-5.904-10.754a21.3 21.3 0 0 0 2.338-5.679c3.98-1.168 7.966-2.336 11.947-3.502c1.073-.314 1.077-1.857.002-2.17'
      />
      <circle cx='31.553' cy='31.836' r='17.901' fill='#f9ec21' />
    </svg>
  );
}

function DarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 48 48'
    >
      <path
        fill='#2f88ff'
        stroke='#000'
        strokeLinejoin='round'
        strokeWidth='4'
        d='M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z'
      />
    </svg>
  );
}

function PasswordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16'
        opacity='0.5'
      />
      <path
        fill='currentColor'
        d='M8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z'
      />
    </svg>
  );
}

function ServicesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        d='M6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-6V0m0 12V9M0 6h3m6 0h3M2 2l2 2m4 4l2 2m0-8L8 4M4 8l-2 2m16 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-6V3m0 12v-3m-6-3h3m6 0h3M14 5l2 2m4 4l2 2m0-8l-2 2m-4 4l-2 2m-5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-6v-3m0 12v-3m-6-3h3m6 0h3M5 14l2 2m4 4l2 2m0-8l-2 2m-4 4l-2 2'
      />
    </svg>
  );
}

function InventoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g fill='none'>
        <path
          fill='currentColor'
          fillOpacity='0.16'
          d='M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth='1.5'
          d='M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7m5 4h8M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3'
        />
      </g>
    </svg>
  );
}

function RamIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='512'
      height='512'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M189.6 19.18C162 46.06 150.9 71.02 149 94.29c-1.7 21.21 4.3 41.51 14.6 60.81c11.2-2.8 23.2-2.7 34.7.9c4.5-19.1 10.5-38.6 24.3-56c14.4-18.06 36.9-33.1 72.5-43.47c-22-16.95-48.1-28.2-75.9-33.63c-10.2-1.99-20.1-3.23-29.6-3.72m-25.1.41c-31.6 2.76-58.5 14.19-80.27 31.83c-16.52 13.36-30.19 30.44-40.65 50.28l1.38-.2c6.28 45 31.59 70.4 75.44 83.6c7-9.9 16.1-17.9 26.3-23.4c-10.8-20.9-17.6-44.1-15.6-68.86c1.9-23.76 12.1-48.51 33.4-73.25m146.8 51.25c-40 9.69-61.5 23.99-74.6 40.36c-12 15.2-17.2 32.8-21.6 52.2c7.3 4.2 12.9 9.2 17.1 14.8c4 5.4 6.6 11.2 8.6 17.1c33.4-15.7 76.2-33.2 118-30.1c-7-39.3-24-70.81-47.5-94.36M32.5 127c-4.83 13.6-8.37 28.1-10.52 43.3c-4.54 32-.31 67.5 10.98 99.9c29.71 2.9 53.76-2.6 72.74-21.8c-.6-5.5-.8-11.1-.7-16.7c.2-11 2.5-21.4 6.4-30.7c-38.71-12.9-66.7-37.3-78.9-74m318 55.9h-2.6l-6.6.3c-2.2.2-4.3.4-6.4.6c-33.3 3.8-68.3 19-96.1 32.3l-7.2 3.4c-1 .9-2.1 1.8-3.1 2.8c0 0-23-18.1-55.1-24.7c-23.1-4.7-16.4 33.5 1.5 49c18.9 16.5 36.8 16.3 36.8 16.3c-11 20.3-20.3 38.2-28.8 54.6c23 5.7 53.9 4.7 94.9-7.4l11.7-3.5l-.2 12.2c-.4 27.5-25.9 53.7-61.9 68.3c-24.5 9.9-54.6 14-86.5 7.5c-18.2 29.9-39.9 60.1-74.15 99.4H355.9c-.1-10.3.2-20.8.6-31.6l10.9 5.3l-8.5-29.1l15.6 4.2l-17-55.4c-.8-13.2-2.5-26.1-5.6-38.5c43.9 10.3 98.5 24.3 126 17.4c8-2 21.1-27.6 17.7-43.9c-5.3-25.9-40.3-36.3-58.4-52.4c0 0-12.5-29-22.7-43.2c-11.7-16.3-32.7-34.1-41.7-41.5l-4.8-.8c-5.7-1-11.5-1.6-17.5-1.6m3 40.8c20.3 3.4 43.2 9.7 39.4 38.7c-24.7-1.9-48.8-3.6-39.4-38.7M109.6 269c-19.61 15.2-43.6 20.6-69.25 19.6c14.27 31.5 35.56 58.1 62.05 72.8c18.3-11 30.4-32.9 26-56.4c-8.9-10.5-15.1-22.9-18.8-36m37.4 52.6c-1.9 19.2-11.7 36.6-25.9 48.5c23.9 9.2 46.9 11.3 67.5 8.6c8.8-15.7 8.2-28.3 2.7-41.4c-17.5-2.3-32.2-7.8-44.3-15.7m120.7 9.6c-21.2 5.2-40.3 7.6-57.2 7.4c3 11.2 3.2 23.2-.5 35.6c3.6-1.2 7.2-2.4 10.6-3.8c23.6-9.5 40.2-25.4 47.1-39.2'
      />
    </svg>
  );
}

function PlagueDoctorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='512'
      height='512'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        d='M259.646 33.586c-44.698 10.116-96.576 26.075-141.98 42.926c-42.563 15.796-79.721 32.796-97.816 44.22l28.634 40.006C85.45 141.836 163.58 106.833 258.87 78.725c.115-12.307.426-26.651.777-45.14zm-.755 63.922c-89.553 26.838-163.813 59.876-199.809 78.035l11.363 15.877c64.955-26.867 129.99-52.813 189.244-73.865c-.436-6.558-.686-13.057-.798-20.047m10.861 35.584c-63.467 22.407-134.187 50.745-204.494 79.949l-.063-.148c-22.345 11.147-36.325 23.22-47.084 35.552c3.174.194 6.684.262 10.803-.04c11.524-.847 26.29-3.532 42.982-7.69c33.387-8.316 74.56-22.461 115.413-38.873s81.444-35.104 113.841-52.438c20.416-10.922 37.096-21.52 48.778-30.168c-27.24-.104-57.425 6.306-80.176 13.856m18.371 43.3a1084 1084 0 0 1-16.488 8.057c6.635 4.076 11.482 10.968 14.367 18.592c3.944 10.42 4.892 22.894 2.566 35.8c-2.325 12.907-7.527 24.049-14.789 32.046s-17.434 13.233-28.275 10.888c-10.842-2.344-18.433-11.423-22.377-21.843s-4.894-22.894-2.568-35.801c1.264-7.02 3.387-13.512 6.222-19.266a1359 1359 0 0 1-32.761 13.678a1249 1249 0 0 1-43.65 16.613c11.354 20.924 27.32 38.077 51.366 50.307l9.17 4.664l-5.842 8.469c-8.506 12.333-6.783 30.624 1.875 43.974s21.871 20.897 38.64 14.395c59.434-23.047 104.228-28.81 145.775-21.113c34.839 6.454 67.127 22.398 103.834 43.81c-12.425-28.256-33.968-57.384-60.729-82.209c-33.985-31.525-76.04-56.09-116.33-64.65l-5.635-1.198l-1.271-5.617c-.802-3.538-8.001-29.713-23.1-49.595zm-29.527 22.372c-2.798.11-6.202 1.744-9.908 5.826c-4.563 5.024-8.733 13.374-10.53 23.348s-.835 19.436 1.643 25.982s5.817 9.469 8.896 10.135s7.182-.646 11.744-5.67c4.563-5.024 8.735-13.377 10.532-23.35c1.796-9.973.833-19.436-1.645-25.982c-2.478-6.547-5.817-9.469-8.896-10.135a7.3 7.3 0 0 0-1.836-.154m-125.414 42.4c-18.266 6.199-35.82 11.553-51.98 15.748c-4.18 24.009 9.737 55.444 19.53 71.184c36.172 26.058 68.19 52.072 126.23 70.021l-4.89-22.824c-12.567-3.576-23.285-12.214-30.234-22.93c-10.383-16.01-14.055-37.249-6.25-55.41c-23.92-14.166-40.703-33.554-52.406-55.789m-56.55 92.08c-9.031 13.247-23.97 18.894-37.823 21.772c15.285 25.397 49.541 49.906 93.216 72.103c41.305 20.993 90.376 40.17 138.215 58.6c-11.892-19.381-20.046-40.812-22.304-63.33c-86.163-20.547-125.096-57.285-171.303-89.145zm-27.696 61.57C36.052 424.224 26.8 455.703 25.279 487h198.588c-34.824-13.775-69.286-28.225-99.998-43.834c-29.2-14.84-55.252-30.589-74.933-48.352'
      />
    </svg>
  );
}

function ProfileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='512'
      height='512'
      viewBox='0 0 512 512'
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64'
      />
    </svg>
  );
}

function AdminIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='256'
      height='256'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5Zm0 3.9a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0 7.9c2 0 6 1.09 6 3.08a7.2 7.2 0 0 1-12 0c0-1.99 4-3.08 6-3.08'
      />
    </svg>
  );
}

function ManagerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='256'
      height='256'
      viewBox='0 0 24 24'
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        color='currentColor'
      >
        <path d='M20 22v-5c0-1.886 0-2.828-.586-3.414S17.886 13 16 13l-4 9l-4-9c-1.886 0-2.828 0-3.414.586S4 15.114 4 17v5' />
        <path d='m12 15l-.5 4l.5 1.5l.5-1.5zm0 0l-1-2h2zm3.5-8.5v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0' />
      </g>
    </svg>
  );
}

function EmployeeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='256'
      height='256'
      viewBox='0 0 32 32'
    >
      <path
        fill='currentColor'
        d='M28.523 23.813c-.518-.51-6.795-2.938-7.934-3.396c-1.133-.45-1.585-1.697-1.585-1.697s-.51.282-.51-.51c0-.793.51.51 1.02-2.548c0 0 1.415-.397 1.134-3.68h-.34s.85-3.51 0-4.698c-.853-1.188-1.187-1.98-3.06-2.548c-1.87-.567-1.19-.454-2.548-.396c-1.36.057-2.492.793-2.492 1.188c0 0-.85.057-1.188.397c-.34.34-.906 1.924-.906 2.32s.283 3.06.566 3.624l-.337.11c-.283 3.284 1.132 3.682 1.132 3.682c.51 3.058 1.02 1.755 1.02 2.548c0 .792-.51.51-.51.51s-.453 1.246-1.585 1.697c-1.132.453-7.416 2.887-7.927 3.396c-.51.52-.453 2.896-.453 2.896h26.954s.063-2.378-.453-2.897zm-6.335 2.25h-4.562v-1.25h4.562z'
      />
    </svg>
  );
}

function UserMaleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='24'
      viewBox='0 0 22 24'
    >
      <path
        fill='currentColor'
        d='M14.145 16.629a24 24 0 0 1-.052-2.525l-.001.037a4.85 4.85 0 0 0 1.333-2.868l.002-.021c.339-.028.874-.358 1.03-1.666a1.22 1.22 0 0 0-.455-1.218l-.003-.002c.552-1.66 1.698-6.796-2.121-7.326C13.485.35 12.479 0 11.171 0c-5.233.096-5.864 3.951-4.72 8.366a1.22 1.22 0 0 0-.455 1.229l-.001-.008c.16 1.306.691 1.638 1.03 1.666a4.86 4.86 0 0 0 1.374 2.888a25 25 0 0 1-.058 2.569l.005-.081C7.308 19.413.32 18.631 0 24h22.458c-.322-5.369-7.278-4.587-8.314-7.371z'
      />
    </svg>
  );
}

function UserFemaleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='24'
      viewBox='0 0 22 24'
    >
      <path
        fill='currentColor'
        d='M14.041 16.683a15 15 0 0 1-.035-.72c2.549-.261 4.338-.872 4.338-1.585c-.007 0-.006-.03-.006-.041C16.432 12.619 19.99.417 13.367.663a3.34 3.34 0 0 0-2.196-.664h.008C2.208.677 6.175 12.202 4.13 14.377h-.004c.008.698 1.736 1.298 4.211 1.566c-.007.17-.022.381-.054.734C7.256 19.447.321 18.671.001 24h22.294c-.319-5.33-7.225-4.554-8.253-7.317z'
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m7 10l5 5l5-5'
      />
    </svg>
  );
}

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m17 14l-5-5l-5 5'
      />
    </svg>
  );
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m14 7l-5 5l5 5'
      />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m10 17l5-5l-5-5'
      />
    </svg>
  );
}

function ArrowUpDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m11 16l-3 3m0 0l-3-3m3 3V5m5 3l3-3m0 0l3 3m-3-3v14'
      />
    </svg>
  );
}

function TradeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2.2'
      >
        <path d='M20 13V8h-5' />
        <path d='m20 8l-5 5c-.883.883-1.324 1.324-1.865 1.373q-.135.012-.27 0c-.541-.05-.982-.49-1.865-1.373s-1.324-1.324-1.865-1.373a1.5 1.5 0 0 0-.27 0c-.541.05-.982.49-1.865 1.373l-3 3' />
      </g>
    </svg>
  );
}

function OpenSidebarSolidIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6zM4.379 9.293a1 1 0 0 0 0 1.414L5.672 12l-1.293 1.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 0'
          clipRule='evenodd'
        />
        <path d='M12 20h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8z' />
      </g>
    </svg>
  );
}

function CloseSidebarSolidIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6zM7.793 9.293a1 1 0 0 1 0 1.414L6.5 12l1.293 1.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0'
          clipRule='evenodd'
        />
        <path d='M12 20h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8z' />
      </g>
    </svg>
  );
}

export {
  AdminIcon,
  ArrowUpDownIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ManagerIcon,
  EmployeeIcon,
  ProfileIcon,
  InventoryIcon,
  ServicesIcon,
  PasswordIcon,
  AddIcon,
  EyeOpenIcon,
  EyeClosedIcon,
  CloseIcon,
  MenuIcon,
  HomeIcon,
  DarkIcon,
  LightIcon,
  LoadingIcon,
  ReloadIcon,
  GearIcon,
  TrashIcon,
  TradeIcon,
  OpenSidebarSolidIcon,
  CloseSidebarSolidIcon,
  ViewIcon,
  EditIcon,
  BackIcon,
  DotsHorizontalIcon,
  CopyIcon,
  LogOutIcon,
  LineChartIcon,
  UserIcon,
  UserMaleIcon,
  UserFemaleIcon,
  UsersIcon,
  UsersNetworkIcon,
  PackageIcon,
  ShoppingCartIcon,
  RamIcon,
  PlagueDoctorIcon,
};
