import { IconCheck } from '@tabler/icons-react';
import { CallToAction, PricingProps } from '~/shared/types';
import CTA from '../common/CTA';
import HeaderWidget from '../common/HeaderWidget';

const Pricing = ({ header, prices }: PricingProps) => (
  <section className="bg-primary-50 dark:bg-slate-800" id="pricing">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {header && <HeaderWidget header={header} titleClassname="text-2xl sm:text-3xl" />}

      <div className="mx-auto mb-10 max-w-3xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 className="mb-3 text-lg font-semibold text-slate-800 dark:text-slate-100">
            Cómo inscribirse
          </h3>
          <ol className="list-decimal space-y-2 pl-5 text-slate-700 dark:text-slate-300">
            <li>
              Completá la inscripción en el enlace:{' '}
              <a
                href="https://docs.google.com/forms/u/0/d/1J-nT2LNOA4ClRww1SEKaRNqNAa4E0xUgcgMpqva_YFs/edit?usp=sharing_eip_se_dm&ts=68c19fa5&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-700 underline hover:opacity-90 dark:text-primary-400"
              >
                Formulario de Inscripción 2025
              </a>
            </li>
            <li>
              Pagá la matrícula. Alias:{' '}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                mutual.mda.mdp
              </code>
            </li>
            <li>
              📩 Enviá el comprobante al director de la colonia:{' '}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                <a
                  href="https://wa.me/542236329755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline hover:opacity-90"
                >
                  Whatsapp 2236329755
                </a>
              </code>
            </li>
          </ol>

          <div className="mt-4 space-y-1 text-slate-700 dark:text-slate-300">
            <p>


            </p>
            <p>✨ ¡Con estos tres pasos tu lugar queda asegurado!</p>
          </div>
        </div>
      </div>
      <div className="flex items-stretch justify-center">
        <div className="grid grid-cols-3 gap-3 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {prices.map(({ title, value, period, texts, callToAction, hasRibbon, ribbonTitle }, index) => (
            <div
              className="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
              key={`item-pricing-${index}`}
            >
              <div className="card relative flex w-full max-w-sm flex-col justify-between text-center">
                {hasRibbon && ribbonTitle && (
                  <div className="absolute right-[-5px] top-[-5px] z-[1] h-[100px] w-[100px] overflow-hidden text-right">
                    <span className="ribbon">{ribbonTitle}</span>
                  </div>
                )}
                <ul className="px-2 py-0">
                  <li className="text-center text-xl font-medium uppercase leading-6 tracking-wider text-gray-800 dark:text-slate-400">
                    {title}
                  </li>
                  <li className="mt-5 mb-2.5 flex items-center justify-center text-center font-semibold">
                    {typeof value === "number" ? (
                      <>
                        <span className="text-5xl">$</span>
                        <span className="text-6xl">{value}</span>
                      </>)
                      : (
                        <span className="text-4xl">{value}</span>
                      )}

                  </li>
                  <li className="mb-7 text-center text-base font-medium capitalize leading-6 text-gray-600 dark:text-slate-400">
                    {period}
                  </li>
                  {texts &&
                    texts.map((item, index) => (
                      <li
                        key={`text-pricing-${index}`}
                        className="mb-1.5 flex items-start text-left text-base leading-7"
                      >
                        <div className="mt-1.5 mr-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600">
                          <IconCheck className="text-white dark:text-slate-200" />
                        </div>
                        {item}
                      </li>
                    ))}
                </ul>
                {callToAction && (
                  <CTA data={callToAction as CallToAction} class={`mt-8 ${hasRibbon ? 'btn-primary' : ''}`} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
