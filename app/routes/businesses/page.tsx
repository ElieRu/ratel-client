import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

// 1. Définition du schéma de validation avec Zod
const formSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  slogan: z.string().optional(),
  website: z
    .string()
    .url('Veuillez entrer une URL valide (ex: https://example.com)')
    .or(z.literal('')),
  description: z
    .string()
    .min(10, 'La description doit faire au moins 10 caractères')
    .max(500, 'La description ne doit pas dépasser 500 caractères'),
});

type FormData = z.infer<typeof formSchema>;

export default function BusinessForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: '',
      slogan: '',
      website: '',
      description: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    // Exemple d'envoi API simulé
    const savePromise = new Promise((resolve) => setTimeout(resolve, 1500));

    toast.promise(savePromise, {
      loading: 'Enregistrement en cours...',
      success: () => {
        reset(); // Réinitialise le formulaire après succès
        return 'Informations enregistrées avec succès !';
      },
      error: 'Une erreur est survenue.',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
    >
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
        Informations de l'entreprise
      </h2>

      {/* Nom */}
      <div className="space-y-1">
        <label htmlFor="nom" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Nom <span className="text-red-500">*</span>
        </label>
        <input
          id="nom"
          type="text"
          placeholder="Ex: Ratel Xpress"
          {...register('nom')}
          className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-300"
        />
        {errors.nom && (
          <p className="text-xs text-red-500">{errors.nom.message}</p>
        )}
      </div>

      {/* Slogan */}
      <div className="space-y-1">
        <label htmlFor="slogan" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Slogan
        </label>
        <input
          id="slogan"
          type="text"
          placeholder="Ex: L'innovation à votre portée"
          {...register('slogan')}
          className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-300"
        />
        {errors.slogan && (
          <p className="text-xs text-red-500">{errors.slogan.message}</p>
        )}
      </div>

      {/* Website */}
      <div className="space-y-1">
        <label htmlFor="website" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Site Web
        </label>
        <input
          id="website"
          type="url"
          placeholder="https://example.com"
          {...register('website')}
          className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-300"
        />
        {errors.website && (
          <p className="text-xs text-red-500">{errors.website.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-1">
        <label htmlFor="description" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          rows={4}
          placeholder="Présentez votre activité en quelques mots..."
          {...register('description')}
          className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-slate-300"
        />
        {errors.description && (
          <p className="text-xs text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
      >
        {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
      </button>
    </form>
  );
}