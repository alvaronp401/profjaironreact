import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // Lista de User-Agents do Google que devem ser permitidos
  const googleBots = [
    'Googlebot',
    'Google-InspectionTool',
    'GoogleOther',
    'Mediapartners-Google',
    'AdsBot-Google',
    'FeedFetcher-Google',
  ];

  // Verifica se é um bot do Google
  const isGoogleBot = googleBots.some(bot => userAgent.includes(bot));

  // Se for Googlebot, garante que não será bloqueado
  if (isGoogleBot) {
    const response = NextResponse.next();
    
    // Adiciona headers para ajudar na indexação
    response.headers.set('X-Robots-Tag', 'index, follow');
    
    return response;
  }

  // Para outros usuários, continua normalmente
  return NextResponse.next();
}

// Aplica o middleware em todas as rotas
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

