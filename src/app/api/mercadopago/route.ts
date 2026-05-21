import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { plan } = body; // e.g. "mensual" or "anual"

    // IMPORTANTE: Aquí es donde integrarás el SDK de Mercado Pago.
    // 1. Instalar SDK: npm install mercadopago
    // 2. Configurar Access Token:
    // import { MercadoPagoConfig, Preference } from 'mercadopago';
    // const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
    //
    // 3. Crear la preferencia de pago según el plan seleccionado.
    // const preference = new Preference(client);
    // const response = await preference.create({ body: { items: [{ title: 'EduPanel ' + plan, unit_price: 499, quantity: 1 }] } });
    // return NextResponse.json({ id: response.id, init_point: response.init_point });

    // Mock response for now
    console.log(`Creando preferencia de pago para el plan: ${plan}`);
    
    return NextResponse.json({ 
      success: true, 
      message: "Preferencia de pago creada (Mock)",
      init_point: "https://www.mercadopago.com.mx" // Redirigir aquí
    });
    
  } catch (error) {
    console.error("Error al crear preferencia de Mercado Pago:", error);
    return NextResponse.json(
      { error: "Error al procesar el pago" },
      { status: 500 }
    );
  }
}
