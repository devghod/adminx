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
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <g fill='none'>
        <path
          fill='currentColor'
          fillOpacity='0.25'
          d='M4 7.5c0-.236 0-.354.073-.427S4.264 7 4.5 7h15c.236 0 .354 0 .427.073S20 7.264 20 7.5v.252c0 .09 0 .136-.014.176a.25.25 0 0 1-.057.092c-.03.03-.07.05-.151.091c-.651.325-.976.488-1.213.732a2 2 0 0 0-.453.733C18 9.896 18 10.26 18 10.988V16c0 1.886 0 2.828-.586 3.414S15.886 20 14 20h-4c-1.886 0-2.828 0-3.414-.586S6 17.886 6 16v-5.012c0-.728 0-1.092-.112-1.412a2 2 0 0 0-.453-.733c-.237-.244-.562-.407-1.213-.732a.6.6 0 0 1-.151-.091a.25.25 0 0 1-.057-.092C4 7.888 4 7.842 4 7.752z'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          d='M10.068 4.37c.114-.106.365-.2.715-.267A6.7 6.7 0 0 1 12 4c.44 0 .868.036 1.217.103s.6.161.715.268'
          strokeWidth='1'
        />
        <rect
          width='1'
          height='6'
          x='14'
          y='11'
          fill='currentColor'
          rx='.5'
        />
        <rect
          width='1'
          height='6'
          x='9'
          y='11'
          fill='currentColor'
          rx='.5'
        />
      </g>
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

export {
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
  ViewIcon,
  EditIcon,
  BackIcon,
  DotsHorizontalIcon,
  CopyIcon,
  LogOutIcon,
  LineChartIcon,
  UserIcon,
  UsersIcon,
  UsersNetworkIcon,
  PackageIcon,
  ShoppingCartIcon,
};
