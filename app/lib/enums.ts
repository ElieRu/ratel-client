/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 

import { z } from 'zod'

/*
* This file exports all Zod enum schemas and their inferred TypeScript types.
*
* 🟢 You can import this file directly.
*/

export const StatusContact = ['EN_ATTENTE', 'VERIFIE']
export const TypeContact = ['PHONE', 'EMAIL']
export const TypeDevise = ['USD', 'CDF']
export const StatusAchat = ['EN_COURS', 'VALIDE', 'ANNULE']
export const StatusAgent = ['ACTIF', 'BLOQUE']
export const StatusCommande = ['EN_ATTENTE']
export const StatusInvitation = ['EN_ATTENTE', 'ACCEPTE', 'ANNULE']
export const StatusPromotion = [
  'EN_ATTENTE',
  'DRAFT',
  'ACTIVE',
  'PAUSE',
  'EXPIRE'
]
export const StatusReservation = ['EN_ATTENTE']
export const StatusVente = ['EN_ATTENTE', 'VALIDE']
export const TypeBusiness = [
  'PERSONNEL',
  'ETABLISSEMENT',
  'ENTREPRISE'
]
export const TypeInvitation = ['CLIENT', 'AGENT', 'FOURNISSEUR']
export const TypePromotion = [
  'POURCENTAGE',
  'MONTANT_FIXE',
  'BOGO',
  'LIVRAISON_GRATUITE'
]
export const UserRole = ['USER', 'ADMIN', 'MANAGER']
export const UserSex = ['HOMME', 'FEMME']
