import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * Proxy a request to backend with Bearer token added to Authorization header.
 * The token is retrieved from the 'session' cookie.
 *
 * Supports all common HTTP methods.
 */

const ParamsPromise = Promise<{ path: string[] }>;

async function proxyWithBearer(req: NextRequest, paramsPromise: typeof ParamsPromise) {

  try {

    const params = await paramsPromise;

    // Access session token from cookie
    const cookieStore = await cookies();
    const token = cookieStore.get('session')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized: No session token found' }, { status: 401 });
    }

    // Build backend API url from path segments
    const apiPath = params.path?.join('/') ?? '';
    const backendUrl = `http://localhost:4001/api/${apiPath}`;

    // Prepare headers: clone original and add Authorization
    const headers = new Headers(req.headers);
    headers.set('Authorization', `Bearer ${token}`);

    // Handle request body if method supports it
    const method = req.method.toUpperCase();
    const hasBody = ['POST', 'PUT', 'PATCH'].includes(method);
    const body = hasBody ? await req.arrayBuffer() : undefined;

    // Make the proxied request
    const backendResponse = await fetch(backendUrl, {
      method,
      headers,
      body,
    });

    // Prepare response headers (forwarding most from backend)
    const resHeaders = new Headers();
    backendResponse.headers.forEach((value, key) => {
      // Filter out hop-by-hop or forbidden headers if needed
      if (key.toLowerCase() !== 'content-encoding') {
        resHeaders.set(key, value);
      }
    });

    // Copy response body
    const responseBody = await backendResponse.arrayBuffer();

    // Return NextResponse with backend response data
    return new NextResponse(responseBody, {
      status: backendResponse.status,
      statusText: backendResponse.statusText,
      headers: resHeaders,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Export handlers for common HTTP methods
export async function GET(req: NextRequest, { params }: { params: typeof ParamsPromise }) {
  return proxyWithBearer(req, params);
}

export async function POST(req: NextRequest, { params }: { params: typeof ParamsPromise }) {
  return proxyWithBearer(req, params);
}

export async function PUT(req: NextRequest, { params }: { params: typeof ParamsPromise }) {
  return proxyWithBearer(req, params);
}

export async function PATCH(req: NextRequest, { params }: { params: typeof ParamsPromise }) {
  return proxyWithBearer(req, params);
}

export async function DELETE(req: NextRequest, { params }: { params: typeof ParamsPromise }) {
  return proxyWithBearer(req, params);
}

