import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export async function POST(request) {
  try {
    // Obter dados do corpo da requisição
    const body = await request.json();
    const { email, password } = body;

    // Validar entradas
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Conectar ao banco de dados
    const { db } = await connectToDatabase();
    const usersCollection = db.collection('users');

    // Buscar usuário pelo email
    const user = await usersCollection.findOne({ email });

    // Verificar se o usuário existe
    if (!user) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    // Verificar senha
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    // Gerar token de autenticação
    const token = crypto.randomBytes(32).toString('hex');

    // No sistema real, você armazenaria o token no banco de dados
    // e configuraria uma expiração para ele

    // Retornar resposta de sucesso
    return NextResponse.json({
      token,
      user: {
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Erro durante autenticação:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 